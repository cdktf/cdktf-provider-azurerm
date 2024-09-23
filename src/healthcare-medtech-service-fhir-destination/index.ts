// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service_fhir_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareMedtechServiceFhirDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service_fhir_destination#destination_fhir_mapping_json HealthcareMedtechServiceFhirDestination#destination_fhir_mapping_json}
  */
  readonly destinationFhirMappingJson: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service_fhir_destination#destination_fhir_service_id HealthcareMedtechServiceFhirDestination#destination_fhir_service_id}
  */
  readonly destinationFhirServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service_fhir_destination#destination_identity_resolution_type HealthcareMedtechServiceFhirDestination#destination_identity_resolution_type}
  */
  readonly destinationIdentityResolutionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service_fhir_destination#id HealthcareMedtechServiceFhirDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service_fhir_destination#location HealthcareMedtechServiceFhirDestination#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service_fhir_destination#medtech_service_id HealthcareMedtechServiceFhirDestination#medtech_service_id}
  */
  readonly medtechServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service_fhir_destination#name HealthcareMedtechServiceFhirDestination#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service_fhir_destination#timeouts HealthcareMedtechServiceFhirDestination#timeouts}
  */
  readonly timeouts?: HealthcareMedtechServiceFhirDestinationTimeouts;
}
export interface HealthcareMedtechServiceFhirDestinationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service_fhir_destination#create HealthcareMedtechServiceFhirDestination#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service_fhir_destination#delete HealthcareMedtechServiceFhirDestination#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service_fhir_destination#read HealthcareMedtechServiceFhirDestination#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service_fhir_destination#update HealthcareMedtechServiceFhirDestination#update}
  */
  readonly update?: string;
}

export function healthcareMedtechServiceFhirDestinationTimeoutsToTerraform(struct?: HealthcareMedtechServiceFhirDestinationTimeouts | cdktf.IResolvable): any {
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


export function healthcareMedtechServiceFhirDestinationTimeoutsToHclTerraform(struct?: HealthcareMedtechServiceFhirDestinationTimeouts | cdktf.IResolvable): any {
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

export class HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HealthcareMedtechServiceFhirDestinationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HealthcareMedtechServiceFhirDestinationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service_fhir_destination azurerm_healthcare_medtech_service_fhir_destination}
*/
export class HealthcareMedtechServiceFhirDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_healthcare_medtech_service_fhir_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthcareMedtechServiceFhirDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthcareMedtechServiceFhirDestination to import
  * @param importFromId The id of the existing HealthcareMedtechServiceFhirDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service_fhir_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthcareMedtechServiceFhirDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_healthcare_medtech_service_fhir_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/healthcare_medtech_service_fhir_destination azurerm_healthcare_medtech_service_fhir_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcareMedtechServiceFhirDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: HealthcareMedtechServiceFhirDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_healthcare_medtech_service_fhir_destination',
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
    this._destinationFhirMappingJson = config.destinationFhirMappingJson;
    this._destinationFhirServiceId = config.destinationFhirServiceId;
    this._destinationIdentityResolutionType = config.destinationIdentityResolutionType;
    this._id = config.id;
    this._location = config.location;
    this._medtechServiceId = config.medtechServiceId;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_fhir_mapping_json - computed: false, optional: false, required: true
  private _destinationFhirMappingJson?: string; 
  public get destinationFhirMappingJson() {
    return this.getStringAttribute('destination_fhir_mapping_json');
  }
  public set destinationFhirMappingJson(value: string) {
    this._destinationFhirMappingJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFhirMappingJsonInput() {
    return this._destinationFhirMappingJson;
  }

  // destination_fhir_service_id - computed: false, optional: false, required: true
  private _destinationFhirServiceId?: string; 
  public get destinationFhirServiceId() {
    return this.getStringAttribute('destination_fhir_service_id');
  }
  public set destinationFhirServiceId(value: string) {
    this._destinationFhirServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFhirServiceIdInput() {
    return this._destinationFhirServiceId;
  }

  // destination_identity_resolution_type - computed: false, optional: false, required: true
  private _destinationIdentityResolutionType?: string; 
  public get destinationIdentityResolutionType() {
    return this.getStringAttribute('destination_identity_resolution_type');
  }
  public set destinationIdentityResolutionType(value: string) {
    this._destinationIdentityResolutionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdentityResolutionTypeInput() {
    return this._destinationIdentityResolutionType;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // medtech_service_id - computed: false, optional: false, required: true
  private _medtechServiceId?: string; 
  public get medtechServiceId() {
    return this.getStringAttribute('medtech_service_id');
  }
  public set medtechServiceId(value: string) {
    this._medtechServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get medtechServiceIdInput() {
    return this._medtechServiceId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HealthcareMedtechServiceFhirDestinationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HealthcareMedtechServiceFhirDestinationTimeouts) {
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
      destination_fhir_mapping_json: cdktf.stringToTerraform(this._destinationFhirMappingJson),
      destination_fhir_service_id: cdktf.stringToTerraform(this._destinationFhirServiceId),
      destination_identity_resolution_type: cdktf.stringToTerraform(this._destinationIdentityResolutionType),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      medtech_service_id: cdktf.stringToTerraform(this._medtechServiceId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: healthcareMedtechServiceFhirDestinationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_fhir_mapping_json: {
        value: cdktf.stringToHclTerraform(this._destinationFhirMappingJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_fhir_service_id: {
        value: cdktf.stringToHclTerraform(this._destinationFhirServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_identity_resolution_type: {
        value: cdktf.stringToHclTerraform(this._destinationIdentityResolutionType),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      medtech_service_id: {
        value: cdktf.stringToHclTerraform(this._medtechServiceId),
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
      timeouts: {
        value: healthcareMedtechServiceFhirDestinationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HealthcareMedtechServiceFhirDestinationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
