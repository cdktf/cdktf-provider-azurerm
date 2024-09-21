// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_linked_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisLinkedServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_linked_server#id RedisLinkedServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_linked_server#linked_redis_cache_id RedisLinkedServer#linked_redis_cache_id}
  */
  readonly linkedRedisCacheId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_linked_server#linked_redis_cache_location RedisLinkedServer#linked_redis_cache_location}
  */
  readonly linkedRedisCacheLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_linked_server#resource_group_name RedisLinkedServer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_linked_server#server_role RedisLinkedServer#server_role}
  */
  readonly serverRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_linked_server#target_redis_cache_name RedisLinkedServer#target_redis_cache_name}
  */
  readonly targetRedisCacheName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_linked_server#timeouts RedisLinkedServer#timeouts}
  */
  readonly timeouts?: RedisLinkedServerTimeouts;
}
export interface RedisLinkedServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_linked_server#create RedisLinkedServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_linked_server#delete RedisLinkedServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_linked_server#read RedisLinkedServer#read}
  */
  readonly read?: string;
}

export function redisLinkedServerTimeoutsToTerraform(struct?: RedisLinkedServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function redisLinkedServerTimeoutsToHclTerraform(struct?: RedisLinkedServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisLinkedServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RedisLinkedServerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisLinkedServerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_linked_server azurerm_redis_linked_server}
*/
export class RedisLinkedServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_redis_linked_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisLinkedServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisLinkedServer to import
  * @param importFromId The id of the existing RedisLinkedServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_linked_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisLinkedServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_redis_linked_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/redis_linked_server azurerm_redis_linked_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisLinkedServerConfig
  */
  public constructor(scope: Construct, id: string, config: RedisLinkedServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_redis_linked_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._linkedRedisCacheId = config.linkedRedisCacheId;
    this._linkedRedisCacheLocation = config.linkedRedisCacheLocation;
    this._resourceGroupName = config.resourceGroupName;
    this._serverRole = config.serverRole;
    this._targetRedisCacheName = config.targetRedisCacheName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // geo_replicated_primary_host_name - computed: true, optional: false, required: false
  public get geoReplicatedPrimaryHostName() {
    return this.getStringAttribute('geo_replicated_primary_host_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // linked_redis_cache_id - computed: false, optional: false, required: true
  private _linkedRedisCacheId?: string; 
  public get linkedRedisCacheId() {
    return this.getStringAttribute('linked_redis_cache_id');
  }
  public set linkedRedisCacheId(value: string) {
    this._linkedRedisCacheId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedRedisCacheIdInput() {
    return this._linkedRedisCacheId;
  }

  // linked_redis_cache_location - computed: false, optional: false, required: true
  private _linkedRedisCacheLocation?: string; 
  public get linkedRedisCacheLocation() {
    return this.getStringAttribute('linked_redis_cache_location');
  }
  public set linkedRedisCacheLocation(value: string) {
    this._linkedRedisCacheLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedRedisCacheLocationInput() {
    return this._linkedRedisCacheLocation;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // server_role - computed: false, optional: false, required: true
  private _serverRole?: string; 
  public get serverRole() {
    return this.getStringAttribute('server_role');
  }
  public set serverRole(value: string) {
    this._serverRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRoleInput() {
    return this._serverRole;
  }

  // target_redis_cache_name - computed: false, optional: false, required: true
  private _targetRedisCacheName?: string; 
  public get targetRedisCacheName() {
    return this.getStringAttribute('target_redis_cache_name');
  }
  public set targetRedisCacheName(value: string) {
    this._targetRedisCacheName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRedisCacheNameInput() {
    return this._targetRedisCacheName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RedisLinkedServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RedisLinkedServerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      linked_redis_cache_id: cdktf.stringToTerraform(this._linkedRedisCacheId),
      linked_redis_cache_location: cdktf.stringToTerraform(this._linkedRedisCacheLocation),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      server_role: cdktf.stringToTerraform(this._serverRole),
      target_redis_cache_name: cdktf.stringToTerraform(this._targetRedisCacheName),
      timeouts: redisLinkedServerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linked_redis_cache_id: {
        value: cdktf.stringToHclTerraform(this._linkedRedisCacheId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linked_redis_cache_location: {
        value: cdktf.stringToHclTerraform(this._linkedRedisCacheLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_role: {
        value: cdktf.stringToHclTerraform(this._serverRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_redis_cache_name: {
        value: cdktf.stringToHclTerraform(this._targetRedisCacheName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: redisLinkedServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RedisLinkedServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
