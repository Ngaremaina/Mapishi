import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fetchData } from '../src/service/service';

describe('fetchData', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return recipe data when API call succeeds', async () => {
    const mockResponse = {
      hits: [
        {
          recipe: {
            label: 'Chicken Curry',
          },
        },
      ],
    };

    fetch.mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockResponse),
    });

    const result = await fetchData('chicken');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('q=chicken')
    );
    expect(result).toEqual(mockResponse);
  });

  it('should return error when fetch fails', async () => {
    const mockError = new Error('Network Error');

    fetch.mockRejectedValue(mockError);

    const result = await fetchData('chicken');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toBe(mockError);
  });

  it('should call the Edamam API with the correct query', async () => {
    fetch.mockResolvedValue({
      json: vi.fn().mockResolvedValue({}),
    });

    await fetchData('pizza');

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('q=pizza')
    );
  });
});