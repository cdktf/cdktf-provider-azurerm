// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IothubEndpointCosmosdbAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#authentication_type IothubEndpointCosmosdbAccount#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#container_name IothubEndpointCosmosdbAccount#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#database_name IothubEndpointCosmosdbAccount#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#endpoint_uri IothubEndpointCosmosdbAccount#endpoint_uri}
  */
  readonly endpointUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#id IothubEndpointCosmosdbAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#identity_id IothubEndpointCosmosdbAccount#identity_id}
  */
  readonly identityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#iothub_id IothubEndpointCosmosdbAccount#iothub_id}
  */
  readonly iothubId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#name IothubEndpointCosmosdbAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#partition_key_name IothubEndpointCosmosdbAccount#partition_key_name}
  */
  readonly partitionKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#partition_key_template IothubEndpointCosmosdbAccount#partition_key_template}
  */
  readonly partitionKeyTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#primary_key IothubEndpointCosmosdbAccount#primary_key}
  */
  readonly primaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#resource_group_name IothubEndpointCosmosdbAccount#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#secondary_key IothubEndpointCosmosdbAccount#secondary_key}
  */
  readonly secondaryKey?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#timeouts IothubEndpointCosmosdbAccount#timeouts}
  */
  readonly timeouts?: IothubEndpointCosmosdbAccountTimeouts;
}
export interface IothubEndpointCosmosdbAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#create IothubEndpointCosmosdbAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#delete IothubEndpointCosmosdbAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#read IothubEndpointCosmosdbAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#update IothubEndpointCosmosdbAccount#update}
  */
  readonly update?: string;
}

export function iothubEndpointCosmosdbAccountTimeoutsToTerraform(struct?: IothubEndpointCosmosdbAccountTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function iothubEndpointCosmosdbAccountTimeoutsToHclTerraform(struct?: IothubEndpointCosmosdbAccountTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IothubEndpointCosmosdbAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IothubEndpointCosmosdbAccountTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubEndpointCosmosdbAccountTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account azurerm_iothub_endpoint_cosmosdb_account}
*/
export class IothubEndpointCosmosdbAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_iothub_endpoint_cosmosdb_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IothubEndpointCosmosdbAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IothubEndpointCosmosdbAccount to import
  * @param importFromId The id of the existing IothubEndpointCosmosdbAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IothubEndpointCosmosdbAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_iothub_endpoint_cosmosdb_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/iothub_endpoint_cosmosdb_account azurerm_iothub_endpoint_cosmosdb_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IothubEndpointCosmosdbAccountConfig
  */
  public constructor(scope: Construct, id: string, config: IothubEndpointCosmosdbAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub_endpoint_cosmosdb_account',
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
    this._authenticationType = config.authenticationType;
    this._containerName = config.containerName;
    this._databaseName = config.databaseName;
    this._endpointUri = config.endpointUri;
    this._id = config.id;
    this._identityId = config.identityId;
    this._iothubId = config.iothubId;
    this._name = config.name;
    this._partitionKeyName = config.partitionKeyName;
    this._partitionKeyTemplate = config.partitionKeyTemplate;
    this._primaryKey = config.primaryKey;
    this._resourceGroupName = config.resourceGroupName;
    this._secondaryKey = config.secondaryKey;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // endpoint_uri - computed: false, optional: false, required: true
  private _endpointUri?: string; 
  public get endpointUri() {
    return this.getStringAttribute('endpoint_uri');
  }
  public set endpointUri(value: string) {
    this._endpointUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUriInput() {
    return this._endpointUri;
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

  // identity_id - computed: false, optional: true, required: false
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  public resetIdentityId() {
    this._identityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // iothub_id - computed: false, optional: false, required: true
  private _iothubId?: string; 
  public get iothubId() {
    return this.getStringAttribute('iothub_id');
  }
  public set iothubId(value: string) {
    this._iothubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubIdInput() {
    return this._iothubId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // partition_key_name - computed: false, optional: true, required: false
  private _partitionKeyName?: string; 
  public get partitionKeyName() {
    return this.getStringAttribute('partition_key_name');
  }
  public set partitionKeyName(value: string) {
    this._partitionKeyName = value;
  }
  public resetPartitionKeyName() {
    this._partitionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyNameInput() {
    return this._partitionKeyName;
  }

  // partition_key_template - computed: false, optional: true, required: false
  private _partitionKeyTemplate?: string; 
  public get partitionKeyTemplate() {
    return this.getStringAttribute('partition_key_template');
  }
  public set partitionKeyTemplate(value: string) {
    this._partitionKeyTemplate = value;
  }
  public resetPartitionKeyTemplate() {
    this._partitionKeyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyTemplateInput() {
    return this._partitionKeyTemplate;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
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

  // secondary_key - computed: false, optional: true, required: false
  private _secondaryKey?: string; 
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }
  public set secondaryKey(value: string) {
    this._secondaryKey = value;
  }
  public resetSecondaryKey() {
    this._secondaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryKeyInput() {
    return this._secondaryKey;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IothubEndpointCosmosdbAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IothubEndpointCosmosdbAccountTimeouts) {
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
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      container_name: cdktf.stringToTerraform(this._containerName),
      database_name: cdktf.stringToTerraform(this._databaseName),
      endpoint_uri: cdktf.stringToTerraform(this._endpointUri),
      id: cdktf.stringToTerraform(this._id),
      identity_id: cdktf.stringToTerraform(this._identityId),
      iothub_id: cdktf.stringToTerraform(this._iothubId),
      name: cdktf.stringToTerraform(this._name),
      partition_key_name: cdktf.stringToTerraform(this._partitionKeyName),
      partition_key_template: cdktf.stringToTerraform(this._partitionKeyTemplate),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      secondary_key: cdktf.stringToTerraform(this._secondaryKey),
      timeouts: iothubEndpointCosmosdbAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_name: {
        value: cdktf.stringToHclTerraform(this._containerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_uri: {
        value: cdktf.stringToHclTerraform(this._endpointUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_id: {
        value: cdktf.stringToHclTerraform(this._identityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iothub_id: {
        value: cdktf.stringToHclTerraform(this._iothubId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_key_name: {
        value: cdktf.stringToHclTerraform(this._partitionKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_key_template: {
        value: cdktf.stringToHclTerraform(this._partitionKeyTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
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
      secondary_key: {
        value: cdktf.stringToHclTerraform(this._secondaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: iothubEndpointCosmosdbAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IothubEndpointCosmosdbAccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
