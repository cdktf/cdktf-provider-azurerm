// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineLearningDatastoreDatalakeGen2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#authority_url MachineLearningDatastoreDatalakeGen2#authority_url}
  */
  readonly authorityUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#client_id MachineLearningDatastoreDatalakeGen2#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#client_secret MachineLearningDatastoreDatalakeGen2#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#description MachineLearningDatastoreDatalakeGen2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#id MachineLearningDatastoreDatalakeGen2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#name MachineLearningDatastoreDatalakeGen2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#service_data_identity MachineLearningDatastoreDatalakeGen2#service_data_identity}
  */
  readonly serviceDataIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#storage_container_id MachineLearningDatastoreDatalakeGen2#storage_container_id}
  */
  readonly storageContainerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#tags MachineLearningDatastoreDatalakeGen2#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#tenant_id MachineLearningDatastoreDatalakeGen2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#workspace_id MachineLearningDatastoreDatalakeGen2#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#timeouts MachineLearningDatastoreDatalakeGen2#timeouts}
  */
  readonly timeouts?: MachineLearningDatastoreDatalakeGen2Timeouts;
}
export interface MachineLearningDatastoreDatalakeGen2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#create MachineLearningDatastoreDatalakeGen2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#delete MachineLearningDatastoreDatalakeGen2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#read MachineLearningDatastoreDatalakeGen2#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#update MachineLearningDatastoreDatalakeGen2#update}
  */
  readonly update?: string;
}

export function machineLearningDatastoreDatalakeGen2TimeoutsToTerraform(struct?: MachineLearningDatastoreDatalakeGen2Timeouts | cdktf.IResolvable): any {
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


export function machineLearningDatastoreDatalakeGen2TimeoutsToHclTerraform(struct?: MachineLearningDatastoreDatalakeGen2Timeouts | cdktf.IResolvable): any {
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

export class MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineLearningDatastoreDatalakeGen2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MachineLearningDatastoreDatalakeGen2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2 azurerm_machine_learning_datastore_datalake_gen2}
*/
export class MachineLearningDatastoreDatalakeGen2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_machine_learning_datastore_datalake_gen2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MachineLearningDatastoreDatalakeGen2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MachineLearningDatastoreDatalakeGen2 to import
  * @param importFromId The id of the existing MachineLearningDatastoreDatalakeGen2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MachineLearningDatastoreDatalakeGen2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_machine_learning_datastore_datalake_gen2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_datastore_datalake_gen2 azurerm_machine_learning_datastore_datalake_gen2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineLearningDatastoreDatalakeGen2Config
  */
  public constructor(scope: Construct, id: string, config: MachineLearningDatastoreDatalakeGen2Config) {
    super(scope, id, {
      terraformResourceType: 'azurerm_machine_learning_datastore_datalake_gen2',
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
    this._authorityUrl = config.authorityUrl;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._serviceDataIdentity = config.serviceDataIdentity;
    this._storageContainerId = config.storageContainerId;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._workspaceId = config.workspaceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authority_url - computed: false, optional: true, required: false
  private _authorityUrl?: string; 
  public get authorityUrl() {
    return this.getStringAttribute('authority_url');
  }
  public set authorityUrl(value: string) {
    this._authorityUrl = value;
  }
  public resetAuthorityUrl() {
    this._authorityUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityUrlInput() {
    return this._authorityUrl;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
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

  // service_data_identity - computed: false, optional: true, required: false
  private _serviceDataIdentity?: string; 
  public get serviceDataIdentity() {
    return this.getStringAttribute('service_data_identity');
  }
  public set serviceDataIdentity(value: string) {
    this._serviceDataIdentity = value;
  }
  public resetServiceDataIdentity() {
    this._serviceDataIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDataIdentityInput() {
    return this._serviceDataIdentity;
  }

  // storage_container_id - computed: false, optional: false, required: true
  private _storageContainerId?: string; 
  public get storageContainerId() {
    return this.getStringAttribute('storage_container_id');
  }
  public set storageContainerId(value: string) {
    this._storageContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerIdInput() {
    return this._storageContainerId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MachineLearningDatastoreDatalakeGen2Timeouts) {
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
      authority_url: cdktf.stringToTerraform(this._authorityUrl),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      service_data_identity: cdktf.stringToTerraform(this._serviceDataIdentity),
      storage_container_id: cdktf.stringToTerraform(this._storageContainerId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      timeouts: machineLearningDatastoreDatalakeGen2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authority_url: {
        value: cdktf.stringToHclTerraform(this._authorityUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_data_identity: {
        value: cdktf.stringToHclTerraform(this._serviceDataIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_container_id: {
        value: cdktf.stringToHclTerraform(this._storageContainerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: machineLearningDatastoreDatalakeGen2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MachineLearningDatastoreDatalakeGen2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
