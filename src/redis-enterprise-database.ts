// https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisEnterpriseDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database#client_protocol RedisEnterpriseDatabase#client_protocol}
  */
  readonly clientProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database#cluster_id RedisEnterpriseDatabase#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database#clustering_policy RedisEnterpriseDatabase#clustering_policy}
  */
  readonly clusteringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database#eviction_policy RedisEnterpriseDatabase#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database#name RedisEnterpriseDatabase#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database#port RedisEnterpriseDatabase#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database#resource_group_name RedisEnterpriseDatabase#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * module block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database#module RedisEnterpriseDatabase#module}
  */
  readonly module?: RedisEnterpriseDatabaseModule[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database#timeouts RedisEnterpriseDatabase#timeouts}
  */
  readonly timeouts?: RedisEnterpriseDatabaseTimeouts;
}
export interface RedisEnterpriseDatabaseModule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database#args RedisEnterpriseDatabase#args}
  */
  readonly args?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database#name RedisEnterpriseDatabase#name}
  */
  readonly name: string;
}

export function redisEnterpriseDatabaseModuleToTerraform(struct?: RedisEnterpriseDatabaseModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.stringToTerraform(struct!.args),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface RedisEnterpriseDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database#create RedisEnterpriseDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database#delete RedisEnterpriseDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database#read RedisEnterpriseDatabase#read}
  */
  readonly read?: string;
}

export function redisEnterpriseDatabaseTimeoutsToTerraform(struct?: RedisEnterpriseDatabaseTimeoutsOutputReference | RedisEnterpriseDatabaseTimeouts | cdktf.IResolvable): any {
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

export class RedisEnterpriseDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedisEnterpriseDatabaseTimeouts | undefined {
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

  public set internalValue(value: RedisEnterpriseDatabaseTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database azurerm_redis_enterprise_database}
*/
export class RedisEnterpriseDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_redis_enterprise_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database azurerm_redis_enterprise_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisEnterpriseDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: RedisEnterpriseDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_redis_enterprise_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '2.99.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clientProtocol = config.clientProtocol;
    this._clusterId = config.clusterId;
    this._clusteringPolicy = config.clusteringPolicy;
    this._evictionPolicy = config.evictionPolicy;
    this._name = config.name;
    this._port = config.port;
    this._resourceGroupName = config.resourceGroupName;
    this._module = config.module;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_protocol - computed: false, optional: true, required: false
  private _clientProtocol?: string; 
  public get clientProtocol() {
    return this.getStringAttribute('client_protocol');
  }
  public set clientProtocol(value: string) {
    this._clientProtocol = value;
  }
  public resetClientProtocol() {
    this._clientProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProtocolInput() {
    return this._clientProtocol;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // clustering_policy - computed: false, optional: true, required: false
  private _clusteringPolicy?: string; 
  public get clusteringPolicy() {
    return this.getStringAttribute('clustering_policy');
  }
  public set clusteringPolicy(value: string) {
    this._clusteringPolicy = value;
  }
  public resetClusteringPolicy() {
    this._clusteringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringPolicyInput() {
    return this._clusteringPolicy;
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // module - computed: false, optional: true, required: false
  private _module?: RedisEnterpriseDatabaseModule[] | cdktf.IResolvable; 
  public get module() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('module');
  }
  public set module(value: RedisEnterpriseDatabaseModule[] | cdktf.IResolvable) {
    this._module = value;
  }
  public resetModule() {
    this._module = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RedisEnterpriseDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RedisEnterpriseDatabaseTimeouts) {
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
      client_protocol: cdktf.stringToTerraform(this._clientProtocol),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      clustering_policy: cdktf.stringToTerraform(this._clusteringPolicy),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      module: cdktf.listMapper(redisEnterpriseDatabaseModuleToTerraform)(this._module),
      timeouts: redisEnterpriseDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
