// https://www.terraform.io/docs/providers/azurerm/r/api_management_redis_cache.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementRedisCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_redis_cache.html#api_management_id ApiManagementRedisCache#api_management_id}
  */
  readonly apiManagementId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_redis_cache.html#cache_location ApiManagementRedisCache#cache_location}
  */
  readonly cacheLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_redis_cache.html#connection_string ApiManagementRedisCache#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_redis_cache.html#description ApiManagementRedisCache#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_redis_cache.html#name ApiManagementRedisCache#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_redis_cache.html#redis_cache_id ApiManagementRedisCache#redis_cache_id}
  */
  readonly redisCacheId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_redis_cache.html#timeouts ApiManagementRedisCache#timeouts}
  */
  readonly timeouts?: ApiManagementRedisCacheTimeouts;
}
export interface ApiManagementRedisCacheTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_redis_cache.html#create ApiManagementRedisCache#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_redis_cache.html#delete ApiManagementRedisCache#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_redis_cache.html#read ApiManagementRedisCache#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_redis_cache.html#update ApiManagementRedisCache#update}
  */
  readonly update?: string;
}

function apiManagementRedisCacheTimeoutsToTerraform(struct?: ApiManagementRedisCacheTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_redis_cache.html azurerm_api_management_redis_cache}
*/
export class ApiManagementRedisCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management_redis_cache";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_redis_cache.html azurerm_api_management_redis_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementRedisCacheConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementRedisCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_redis_cache',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementId = config.apiManagementId;
    this._cacheLocation = config.cacheLocation;
    this._connectionString = config.connectionString;
    this._description = config.description;
    this._name = config.name;
    this._redisCacheId = config.redisCacheId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_id - computed: false, optional: false, required: true
  private _apiManagementId: string;
  public get apiManagementId() {
    return this.getStringAttribute('api_management_id');
  }
  public set apiManagementId(value: string) {
    this._apiManagementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementIdInput() {
    return this._apiManagementId
  }

  // cache_location - computed: false, optional: true, required: false
  private _cacheLocation?: string;
  public get cacheLocation() {
    return this.getStringAttribute('cache_location');
  }
  public set cacheLocation(value: string ) {
    this._cacheLocation = value;
  }
  public resetCacheLocation() {
    this._cacheLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheLocationInput() {
    return this._cacheLocation
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString: string;
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // redis_cache_id - computed: false, optional: true, required: false
  private _redisCacheId?: string;
  public get redisCacheId() {
    return this.getStringAttribute('redis_cache_id');
  }
  public set redisCacheId(value: string ) {
    this._redisCacheId = value;
  }
  public resetRedisCacheId() {
    this._redisCacheId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisCacheIdInput() {
    return this._redisCacheId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementRedisCacheTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementRedisCacheTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_id: cdktf.stringToTerraform(this._apiManagementId),
      cache_location: cdktf.stringToTerraform(this._cacheLocation),
      connection_string: cdktf.stringToTerraform(this._connectionString),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      redis_cache_id: cdktf.stringToTerraform(this._redisCacheId),
      timeouts: apiManagementRedisCacheTimeoutsToTerraform(this._timeouts),
    };
  }
}
