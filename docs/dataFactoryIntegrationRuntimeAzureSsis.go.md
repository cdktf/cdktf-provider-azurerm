# `dataFactoryIntegrationRuntimeAzureSsis` Submodule <a name="`dataFactoryIntegrationRuntimeAzureSsis` Submodule" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryIntegrationRuntimeAzureSsis <a name="DataFactoryIntegrationRuntimeAzureSsis" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis azurerm_data_factory_integration_runtime_azure_ssis}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsis(scope Construct, id *string, config DataFactoryIntegrationRuntimeAzureSsisConfig) DataFactoryIntegrationRuntimeAzureSsis
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig">DataFactoryIntegrationRuntimeAzureSsisConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig">DataFactoryIntegrationRuntimeAzureSsisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCatalogInfo">PutCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCopyComputeScale">PutCopyComputeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCustomSetupScript">PutCustomSetupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putExpressCustomSetup">PutExpressCustomSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putExpressVnetIntegration">PutExpressVnetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putPackageStore">PutPackageStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putPipelineExternalComputeScale">PutPipelineExternalComputeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putProxy">PutProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putVnetIntegration">PutVnetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetCatalogInfo">ResetCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetCopyComputeScale">ResetCopyComputeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetCredentialName">ResetCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetCustomSetupScript">ResetCustomSetupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetEdition">ResetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetExpressCustomSetup">ResetExpressCustomSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetExpressVnetIntegration">ResetExpressVnetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetMaxParallelExecutionsPerNode">ResetMaxParallelExecutionsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetNumberOfNodes">ResetNumberOfNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetPackageStore">ResetPackageStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetPipelineExternalComputeScale">ResetPipelineExternalComputeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetProxy">ResetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetVnetIntegration">ResetVnetIntegration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCatalogInfo` <a name="PutCatalogInfo" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCatalogInfo"></a>

```go
func PutCatalogInfo(value DataFactoryIntegrationRuntimeAzureSsisCatalogInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCatalogInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo">DataFactoryIntegrationRuntimeAzureSsisCatalogInfo</a>

---

##### `PutCopyComputeScale` <a name="PutCopyComputeScale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCopyComputeScale"></a>

```go
func PutCopyComputeScale(value DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCopyComputeScale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale</a>

---

##### `PutCustomSetupScript` <a name="PutCustomSetupScript" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCustomSetupScript"></a>

```go
func PutCustomSetupScript(value DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCustomSetupScript.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript</a>

---

##### `PutExpressCustomSetup` <a name="PutExpressCustomSetup" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putExpressCustomSetup"></a>

```go
func PutExpressCustomSetup(value DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putExpressCustomSetup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup</a>

---

##### `PutExpressVnetIntegration` <a name="PutExpressVnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putExpressVnetIntegration"></a>

```go
func PutExpressVnetIntegration(value DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putExpressVnetIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration</a>

---

##### `PutPackageStore` <a name="PutPackageStore" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putPackageStore"></a>

```go
func PutPackageStore(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putPackageStore.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPipelineExternalComputeScale` <a name="PutPipelineExternalComputeScale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putPipelineExternalComputeScale"></a>

```go
func PutPipelineExternalComputeScale(value DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putPipelineExternalComputeScale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale</a>

---

##### `PutProxy` <a name="PutProxy" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putProxy"></a>

```go
func PutProxy(value DataFactoryIntegrationRuntimeAzureSsisProxy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy">DataFactoryIntegrationRuntimeAzureSsisProxy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryIntegrationRuntimeAzureSsisTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts">DataFactoryIntegrationRuntimeAzureSsisTimeouts</a>

---

##### `PutVnetIntegration` <a name="PutVnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putVnetIntegration"></a>

```go
func PutVnetIntegration(value DataFactoryIntegrationRuntimeAzureSsisVnetIntegration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putVnetIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisVnetIntegration</a>

---

##### `ResetCatalogInfo` <a name="ResetCatalogInfo" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetCatalogInfo"></a>

```go
func ResetCatalogInfo()
```

##### `ResetCopyComputeScale` <a name="ResetCopyComputeScale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetCopyComputeScale"></a>

```go
func ResetCopyComputeScale()
```

##### `ResetCredentialName` <a name="ResetCredentialName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetCredentialName"></a>

```go
func ResetCredentialName()
```

##### `ResetCustomSetupScript` <a name="ResetCustomSetupScript" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetCustomSetupScript"></a>

```go
func ResetCustomSetupScript()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEdition` <a name="ResetEdition" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetEdition"></a>

```go
func ResetEdition()
```

##### `ResetExpressCustomSetup` <a name="ResetExpressCustomSetup" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetExpressCustomSetup"></a>

```go
func ResetExpressCustomSetup()
```

##### `ResetExpressVnetIntegration` <a name="ResetExpressVnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetExpressVnetIntegration"></a>

```go
func ResetExpressVnetIntegration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetId"></a>

```go
func ResetId()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetLicenseType"></a>

```go
func ResetLicenseType()
```

##### `ResetMaxParallelExecutionsPerNode` <a name="ResetMaxParallelExecutionsPerNode" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetMaxParallelExecutionsPerNode"></a>

```go
func ResetMaxParallelExecutionsPerNode()
```

##### `ResetNumberOfNodes` <a name="ResetNumberOfNodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetNumberOfNodes"></a>

```go
func ResetNumberOfNodes()
```

##### `ResetPackageStore` <a name="ResetPackageStore" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetPackageStore"></a>

```go
func ResetPackageStore()
```

##### `ResetPipelineExternalComputeScale` <a name="ResetPipelineExternalComputeScale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetPipelineExternalComputeScale"></a>

```go
func ResetPipelineExternalComputeScale()
```

##### `ResetProxy` <a name="ResetProxy" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetProxy"></a>

```go
func ResetProxy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVnetIntegration` <a name="ResetVnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetVnetIntegration"></a>

```go
func ResetVnetIntegration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryIntegrationRuntimeAzureSsis resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsis_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsis_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsis_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsis_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataFactoryIntegrationRuntimeAzureSsis resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataFactoryIntegrationRuntimeAzureSsis to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataFactoryIntegrationRuntimeAzureSsis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryIntegrationRuntimeAzureSsis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.catalogInfo">CatalogInfo</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference">DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.copyComputeScale">CopyComputeScale</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.customSetupScript">CustomSetupScript</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.expressCustomSetup">ExpressCustomSetup</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.expressVnetIntegration">ExpressVnetIntegration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.packageStore">PackageStore</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList">DataFactoryIntegrationRuntimeAzureSsisPackageStoreList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.pipelineExternalComputeScale">PipelineExternalComputeScale</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference">DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference">DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.vnetIntegration">VnetIntegration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference">DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.catalogInfoInput">CatalogInfoInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo">DataFactoryIntegrationRuntimeAzureSsisCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.copyComputeScaleInput">CopyComputeScaleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.credentialNameInput">CredentialNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.customSetupScriptInput">CustomSetupScriptInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.editionInput">EditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.expressCustomSetupInput">ExpressCustomSetupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.expressVnetIntegrationInput">ExpressVnetIntegrationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.maxParallelExecutionsPerNodeInput">MaxParallelExecutionsPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.nodeSizeInput">NodeSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.numberOfNodesInput">NumberOfNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.packageStoreInput">PackageStoreInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.pipelineExternalComputeScaleInput">PipelineExternalComputeScaleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.proxyInput">ProxyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy">DataFactoryIntegrationRuntimeAzureSsisProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.vnetIntegrationInput">VnetIntegrationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisVnetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.credentialName">CredentialName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.maxParallelExecutionsPerNode">MaxParallelExecutionsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.nodeSize">NodeSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatalogInfo`<sup>Required</sup> <a name="CatalogInfo" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.catalogInfo"></a>

```go
func CatalogInfo() DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference">DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference</a>

---

##### `CopyComputeScale`<sup>Required</sup> <a name="CopyComputeScale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.copyComputeScale"></a>

```go
func CopyComputeScale() DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference</a>

---

##### `CustomSetupScript`<sup>Required</sup> <a name="CustomSetupScript" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.customSetupScript"></a>

```go
func CustomSetupScript() DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference</a>

---

##### `ExpressCustomSetup`<sup>Required</sup> <a name="ExpressCustomSetup" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.expressCustomSetup"></a>

```go
func ExpressCustomSetup() DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference</a>

---

##### `ExpressVnetIntegration`<sup>Required</sup> <a name="ExpressVnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.expressVnetIntegration"></a>

```go
func ExpressVnetIntegration() DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference</a>

---

##### `PackageStore`<sup>Required</sup> <a name="PackageStore" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.packageStore"></a>

```go
func PackageStore() DataFactoryIntegrationRuntimeAzureSsisPackageStoreList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList">DataFactoryIntegrationRuntimeAzureSsisPackageStoreList</a>

---

##### `PipelineExternalComputeScale`<sup>Required</sup> <a name="PipelineExternalComputeScale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.pipelineExternalComputeScale"></a>

```go
func PipelineExternalComputeScale() DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference</a>

---

##### `Proxy`<sup>Required</sup> <a name="Proxy" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.proxy"></a>

```go
func Proxy() DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference">DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.timeouts"></a>

```go
func Timeouts() DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference">DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference</a>

---

##### `VnetIntegration`<sup>Required</sup> <a name="VnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.vnetIntegration"></a>

```go
func VnetIntegration() DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference">DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference</a>

---

##### `CatalogInfoInput`<sup>Optional</sup> <a name="CatalogInfoInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.catalogInfoInput"></a>

```go
func CatalogInfoInput() DataFactoryIntegrationRuntimeAzureSsisCatalogInfo
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo">DataFactoryIntegrationRuntimeAzureSsisCatalogInfo</a>

---

##### `CopyComputeScaleInput`<sup>Optional</sup> <a name="CopyComputeScaleInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.copyComputeScaleInput"></a>

```go
func CopyComputeScaleInput() DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale</a>

---

##### `CredentialNameInput`<sup>Optional</sup> <a name="CredentialNameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.credentialNameInput"></a>

```go
func CredentialNameInput() *string
```

- *Type:* *string

---

##### `CustomSetupScriptInput`<sup>Optional</sup> <a name="CustomSetupScriptInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.customSetupScriptInput"></a>

```go
func CustomSetupScriptInput() DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript</a>

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.editionInput"></a>

```go
func EditionInput() *string
```

- *Type:* *string

---

##### `ExpressCustomSetupInput`<sup>Optional</sup> <a name="ExpressCustomSetupInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.expressCustomSetupInput"></a>

```go
func ExpressCustomSetupInput() DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup</a>

---

##### `ExpressVnetIntegrationInput`<sup>Optional</sup> <a name="ExpressVnetIntegrationInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.expressVnetIntegrationInput"></a>

```go
func ExpressVnetIntegrationInput() DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.licenseTypeInput"></a>

```go
func LicenseTypeInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaxParallelExecutionsPerNodeInput`<sup>Optional</sup> <a name="MaxParallelExecutionsPerNodeInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.maxParallelExecutionsPerNodeInput"></a>

```go
func MaxParallelExecutionsPerNodeInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeSizeInput`<sup>Optional</sup> <a name="NodeSizeInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.nodeSizeInput"></a>

```go
func NodeSizeInput() *string
```

- *Type:* *string

---

##### `NumberOfNodesInput`<sup>Optional</sup> <a name="NumberOfNodesInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.numberOfNodesInput"></a>

```go
func NumberOfNodesInput() *f64
```

- *Type:* *f64

---

##### `PackageStoreInput`<sup>Optional</sup> <a name="PackageStoreInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.packageStoreInput"></a>

```go
func PackageStoreInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineExternalComputeScaleInput`<sup>Optional</sup> <a name="PipelineExternalComputeScaleInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.pipelineExternalComputeScaleInput"></a>

```go
func PipelineExternalComputeScaleInput() DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale</a>

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.proxyInput"></a>

```go
func ProxyInput() DataFactoryIntegrationRuntimeAzureSsisProxy
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy">DataFactoryIntegrationRuntimeAzureSsisProxy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VnetIntegrationInput`<sup>Optional</sup> <a name="VnetIntegrationInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.vnetIntegrationInput"></a>

```go
func VnetIntegrationInput() DataFactoryIntegrationRuntimeAzureSsisVnetIntegration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisVnetIntegration</a>

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.credentialName"></a>

```go
func CredentialName() *string
```

- *Type:* *string

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaxParallelExecutionsPerNode`<sup>Required</sup> <a name="MaxParallelExecutionsPerNode" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.maxParallelExecutionsPerNode"></a>

```go
func MaxParallelExecutionsPerNode() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeSize`<sup>Required</sup> <a name="NodeSize" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.nodeSize"></a>

```go
func NodeSize() *string
```

- *Type:* *string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.numberOfNodes"></a>

```go
func NumberOfNodes() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryIntegrationRuntimeAzureSsisCatalogInfo <a name="DataFactoryIntegrationRuntimeAzureSsisCatalogInfo" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

&datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo {
	ServerEndpoint: *string,
	AdministratorLogin: *string,
	AdministratorPassword: *string,
	DualStandbyPairName: *string,
	ElasticPoolName: *string,
	PricingTier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.serverEndpoint">ServerEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#server_endpoint DataFactoryIntegrationRuntimeAzureSsis#server_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.administratorLogin">AdministratorLogin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#administrator_login DataFactoryIntegrationRuntimeAzureSsis#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.administratorPassword">AdministratorPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#administrator_password DataFactoryIntegrationRuntimeAzureSsis#administrator_password}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.dualStandbyPairName">DualStandbyPairName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#dual_standby_pair_name DataFactoryIntegrationRuntimeAzureSsis#dual_standby_pair_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.elasticPoolName">ElasticPoolName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#elastic_pool_name DataFactoryIntegrationRuntimeAzureSsis#elastic_pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.pricingTier">PricingTier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#pricing_tier DataFactoryIntegrationRuntimeAzureSsis#pricing_tier}. |

---

##### `ServerEndpoint`<sup>Required</sup> <a name="ServerEndpoint" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.serverEndpoint"></a>

```go
ServerEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#server_endpoint DataFactoryIntegrationRuntimeAzureSsis#server_endpoint}.

---

##### `AdministratorLogin`<sup>Optional</sup> <a name="AdministratorLogin" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.administratorLogin"></a>

```go
AdministratorLogin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#administrator_login DataFactoryIntegrationRuntimeAzureSsis#administrator_login}.

---

##### `AdministratorPassword`<sup>Optional</sup> <a name="AdministratorPassword" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.administratorPassword"></a>

```go
AdministratorPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#administrator_password DataFactoryIntegrationRuntimeAzureSsis#administrator_password}.

---

##### `DualStandbyPairName`<sup>Optional</sup> <a name="DualStandbyPairName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.dualStandbyPairName"></a>

```go
DualStandbyPairName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#dual_standby_pair_name DataFactoryIntegrationRuntimeAzureSsis#dual_standby_pair_name}.

---

##### `ElasticPoolName`<sup>Optional</sup> <a name="ElasticPoolName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.elasticPoolName"></a>

```go
ElasticPoolName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#elastic_pool_name DataFactoryIntegrationRuntimeAzureSsis#elastic_pool_name}.

---

##### `PricingTier`<sup>Optional</sup> <a name="PricingTier" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.pricingTier"></a>

```go
PricingTier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#pricing_tier DataFactoryIntegrationRuntimeAzureSsis#pricing_tier}.

---

### DataFactoryIntegrationRuntimeAzureSsisConfig <a name="DataFactoryIntegrationRuntimeAzureSsisConfig" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

&datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsisConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataFactoryId: *string,
	Location: *string,
	Name: *string,
	NodeSize: *string,
	CatalogInfo: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo,
	CopyComputeScale: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale,
	CredentialName: *string,
	CustomSetupScript: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript,
	Description: *string,
	Edition: *string,
	ExpressCustomSetup: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup,
	ExpressVnetIntegration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration,
	Id: *string,
	LicenseType: *string,
	MaxParallelExecutionsPerNode: *f64,
	NumberOfNodes: *f64,
	PackageStore: interface{},
	PipelineExternalComputeScale: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale,
	Proxy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts,
	VnetIntegration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#data_factory_id DataFactoryIntegrationRuntimeAzureSsis#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#location DataFactoryIntegrationRuntimeAzureSsis#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.nodeSize">NodeSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#node_size DataFactoryIntegrationRuntimeAzureSsis#node_size}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.catalogInfo">CatalogInfo</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo">DataFactoryIntegrationRuntimeAzureSsisCatalogInfo</a></code> | catalog_info block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.copyComputeScale">CopyComputeScale</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale</a></code> | copy_compute_scale block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.credentialName">CredentialName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#credential_name DataFactoryIntegrationRuntimeAzureSsis#credential_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.customSetupScript">CustomSetupScript</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript</a></code> | custom_setup_script block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#description DataFactoryIntegrationRuntimeAzureSsis#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.edition">Edition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#edition DataFactoryIntegrationRuntimeAzureSsis#edition}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.expressCustomSetup">ExpressCustomSetup</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup</a></code> | express_custom_setup block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.expressVnetIntegration">ExpressVnetIntegration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration</a></code> | express_vnet_integration block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#id DataFactoryIntegrationRuntimeAzureSsis#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.licenseType">LicenseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#license_type DataFactoryIntegrationRuntimeAzureSsis#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.maxParallelExecutionsPerNode">MaxParallelExecutionsPerNode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#max_parallel_executions_per_node DataFactoryIntegrationRuntimeAzureSsis#max_parallel_executions_per_node}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_nodes}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.packageStore">PackageStore</a></code> | <code>interface{}</code> | package_store block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.pipelineExternalComputeScale">PipelineExternalComputeScale</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale</a></code> | pipeline_external_compute_scale block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy">DataFactoryIntegrationRuntimeAzureSsisProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts">DataFactoryIntegrationRuntimeAzureSsisTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.vnetIntegration">VnetIntegration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisVnetIntegration</a></code> | vnet_integration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#data_factory_id DataFactoryIntegrationRuntimeAzureSsis#data_factory_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#location DataFactoryIntegrationRuntimeAzureSsis#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}.

---

##### `NodeSize`<sup>Required</sup> <a name="NodeSize" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.nodeSize"></a>

```go
NodeSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#node_size DataFactoryIntegrationRuntimeAzureSsis#node_size}.

---

##### `CatalogInfo`<sup>Optional</sup> <a name="CatalogInfo" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.catalogInfo"></a>

```go
CatalogInfo DataFactoryIntegrationRuntimeAzureSsisCatalogInfo
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo">DataFactoryIntegrationRuntimeAzureSsisCatalogInfo</a>

catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#catalog_info DataFactoryIntegrationRuntimeAzureSsis#catalog_info}

---

##### `CopyComputeScale`<sup>Optional</sup> <a name="CopyComputeScale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.copyComputeScale"></a>

```go
CopyComputeScale DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale</a>

copy_compute_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#copy_compute_scale DataFactoryIntegrationRuntimeAzureSsis#copy_compute_scale}

---

##### `CredentialName`<sup>Optional</sup> <a name="CredentialName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.credentialName"></a>

```go
CredentialName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#credential_name DataFactoryIntegrationRuntimeAzureSsis#credential_name}.

---

##### `CustomSetupScript`<sup>Optional</sup> <a name="CustomSetupScript" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.customSetupScript"></a>

```go
CustomSetupScript DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript</a>

custom_setup_script block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#custom_setup_script DataFactoryIntegrationRuntimeAzureSsis#custom_setup_script}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#description DataFactoryIntegrationRuntimeAzureSsis#description}.

---

##### `Edition`<sup>Optional</sup> <a name="Edition" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.edition"></a>

```go
Edition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#edition DataFactoryIntegrationRuntimeAzureSsis#edition}.

---

##### `ExpressCustomSetup`<sup>Optional</sup> <a name="ExpressCustomSetup" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.expressCustomSetup"></a>

```go
ExpressCustomSetup DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup</a>

express_custom_setup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#express_custom_setup DataFactoryIntegrationRuntimeAzureSsis#express_custom_setup}

---

##### `ExpressVnetIntegration`<sup>Optional</sup> <a name="ExpressVnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.expressVnetIntegration"></a>

```go
ExpressVnetIntegration DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration</a>

express_vnet_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#express_vnet_integration DataFactoryIntegrationRuntimeAzureSsis#express_vnet_integration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#id DataFactoryIntegrationRuntimeAzureSsis#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.licenseType"></a>

```go
LicenseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#license_type DataFactoryIntegrationRuntimeAzureSsis#license_type}.

---

##### `MaxParallelExecutionsPerNode`<sup>Optional</sup> <a name="MaxParallelExecutionsPerNode" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.maxParallelExecutionsPerNode"></a>

```go
MaxParallelExecutionsPerNode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#max_parallel_executions_per_node DataFactoryIntegrationRuntimeAzureSsis#max_parallel_executions_per_node}.

---

##### `NumberOfNodes`<sup>Optional</sup> <a name="NumberOfNodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.numberOfNodes"></a>

```go
NumberOfNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_nodes}.

---

##### `PackageStore`<sup>Optional</sup> <a name="PackageStore" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.packageStore"></a>

```go
PackageStore interface{}
```

- *Type:* interface{}

package_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#package_store DataFactoryIntegrationRuntimeAzureSsis#package_store}

---

##### `PipelineExternalComputeScale`<sup>Optional</sup> <a name="PipelineExternalComputeScale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.pipelineExternalComputeScale"></a>

```go
PipelineExternalComputeScale DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale</a>

pipeline_external_compute_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#pipeline_external_compute_scale DataFactoryIntegrationRuntimeAzureSsis#pipeline_external_compute_scale}

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.proxy"></a>

```go
Proxy DataFactoryIntegrationRuntimeAzureSsisProxy
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy">DataFactoryIntegrationRuntimeAzureSsisProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#proxy DataFactoryIntegrationRuntimeAzureSsis#proxy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.timeouts"></a>

```go
Timeouts DataFactoryIntegrationRuntimeAzureSsisTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts">DataFactoryIntegrationRuntimeAzureSsisTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#timeouts DataFactoryIntegrationRuntimeAzureSsis#timeouts}

---

##### `VnetIntegration`<sup>Optional</sup> <a name="VnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.vnetIntegration"></a>

```go
VnetIntegration DataFactoryIntegrationRuntimeAzureSsisVnetIntegration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisVnetIntegration</a>

vnet_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#vnet_integration DataFactoryIntegrationRuntimeAzureSsis#vnet_integration}

---

### DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale <a name="DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

&datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale {
	DataIntegrationUnit: *f64,
	TimeToLive: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale.property.dataIntegrationUnit">DataIntegrationUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#data_integration_unit DataFactoryIntegrationRuntimeAzureSsis#data_integration_unit}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale.property.timeToLive">TimeToLive</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#time_to_live DataFactoryIntegrationRuntimeAzureSsis#time_to_live}. |

---

##### `DataIntegrationUnit`<sup>Optional</sup> <a name="DataIntegrationUnit" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale.property.dataIntegrationUnit"></a>

```go
DataIntegrationUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#data_integration_unit DataFactoryIntegrationRuntimeAzureSsis#data_integration_unit}.

---

##### `TimeToLive`<sup>Optional</sup> <a name="TimeToLive" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale.property.timeToLive"></a>

```go
TimeToLive *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#time_to_live DataFactoryIntegrationRuntimeAzureSsis#time_to_live}.

---

### DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript <a name="DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

&datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript {
	BlobContainerUri: *string,
	SasToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript.property.blobContainerUri">BlobContainerUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#blob_container_uri DataFactoryIntegrationRuntimeAzureSsis#blob_container_uri}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript.property.sasToken">SasToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#sas_token DataFactoryIntegrationRuntimeAzureSsis#sas_token}. |

---

##### `BlobContainerUri`<sup>Required</sup> <a name="BlobContainerUri" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript.property.blobContainerUri"></a>

```go
BlobContainerUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#blob_container_uri DataFactoryIntegrationRuntimeAzureSsis#blob_container_uri}.

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript.property.sasToken"></a>

```go
SasToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#sas_token DataFactoryIntegrationRuntimeAzureSsis#sas_token}.

---

### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

&datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup {
	CommandKey: interface{},
	Component: interface{},
	Environment: *map[string]*string,
	PowershellVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.property.commandKey">CommandKey</a></code> | <code>interface{}</code> | command_key block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.property.component">Component</a></code> | <code>interface{}</code> | component block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.property.environment">Environment</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#environment DataFactoryIntegrationRuntimeAzureSsis#environment}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.property.powershellVersion">PowershellVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#powershell_version DataFactoryIntegrationRuntimeAzureSsis#powershell_version}. |

---

##### `CommandKey`<sup>Optional</sup> <a name="CommandKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.property.commandKey"></a>

```go
CommandKey interface{}
```

- *Type:* interface{}

command_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#command_key DataFactoryIntegrationRuntimeAzureSsis#command_key}

---

##### `Component`<sup>Optional</sup> <a name="Component" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.property.component"></a>

```go
Component interface{}
```

- *Type:* interface{}

component block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#component DataFactoryIntegrationRuntimeAzureSsis#component}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.property.environment"></a>

```go
Environment *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#environment DataFactoryIntegrationRuntimeAzureSsis#environment}.

---

##### `PowershellVersion`<sup>Optional</sup> <a name="PowershellVersion" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.property.powershellVersion"></a>

```go
PowershellVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#powershell_version DataFactoryIntegrationRuntimeAzureSsis#powershell_version}.

---

### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

&datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey {
	TargetName: *string,
	UserName: *string,
	KeyVaultPassword: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword,
	Password: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.property.targetName">TargetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#target_name DataFactoryIntegrationRuntimeAzureSsis#target_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#user_name DataFactoryIntegrationRuntimeAzureSsis#user_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.property.keyVaultPassword">KeyVaultPassword</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword</a></code> | key_vault_password block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#password DataFactoryIntegrationRuntimeAzureSsis#password}. |

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.property.targetName"></a>

```go
TargetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#target_name DataFactoryIntegrationRuntimeAzureSsis#target_name}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#user_name DataFactoryIntegrationRuntimeAzureSsis#user_name}.

---

##### `KeyVaultPassword`<sup>Optional</sup> <a name="KeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.property.keyVaultPassword"></a>

```go
KeyVaultPassword DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword</a>

key_vault_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#key_vault_password DataFactoryIntegrationRuntimeAzureSsis#key_vault_password}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#password DataFactoryIntegrationRuntimeAzureSsis#password}.

---

### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

&datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword {
	LinkedServiceName: *string,
	SecretName: *string,
	Parameters: *map[string]*string,
	SecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.property.secretName">SecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_name DataFactoryIntegrationRuntimeAzureSsis#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#parameters DataFactoryIntegrationRuntimeAzureSsis#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_version DataFactoryIntegrationRuntimeAzureSsis#secret_version}. |

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.property.linkedServiceName"></a>

```go
LinkedServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}.

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_name DataFactoryIntegrationRuntimeAzureSsis#secret_name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#parameters DataFactoryIntegrationRuntimeAzureSsis#parameters}.

---

##### `SecretVersion`<sup>Optional</sup> <a name="SecretVersion" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.property.secretVersion"></a>

```go
SecretVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_version DataFactoryIntegrationRuntimeAzureSsis#secret_version}.

---

### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

&datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent {
	Name: *string,
	KeyVaultLicense: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense,
	License: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent.property.keyVaultLicense">KeyVaultLicense</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense</a></code> | key_vault_license block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent.property.license">License</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#license DataFactoryIntegrationRuntimeAzureSsis#license}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}.

---

##### `KeyVaultLicense`<sup>Optional</sup> <a name="KeyVaultLicense" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent.property.keyVaultLicense"></a>

```go
KeyVaultLicense DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense</a>

key_vault_license block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#key_vault_license DataFactoryIntegrationRuntimeAzureSsis#key_vault_license}

---

##### `License`<sup>Optional</sup> <a name="License" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent.property.license"></a>

```go
License *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#license DataFactoryIntegrationRuntimeAzureSsis#license}.

---

### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

&datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense {
	LinkedServiceName: *string,
	SecretName: *string,
	Parameters: *map[string]*string,
	SecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.property.secretName">SecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_name DataFactoryIntegrationRuntimeAzureSsis#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#parameters DataFactoryIntegrationRuntimeAzureSsis#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_version DataFactoryIntegrationRuntimeAzureSsis#secret_version}. |

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.property.linkedServiceName"></a>

```go
LinkedServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}.

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_name DataFactoryIntegrationRuntimeAzureSsis#secret_name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#parameters DataFactoryIntegrationRuntimeAzureSsis#parameters}.

---

##### `SecretVersion`<sup>Optional</sup> <a name="SecretVersion" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.property.secretVersion"></a>

```go
SecretVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_version DataFactoryIntegrationRuntimeAzureSsis#secret_version}.

---

### DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration <a name="DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

&datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration {
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_id DataFactoryIntegrationRuntimeAzureSsis#subnet_id}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_id DataFactoryIntegrationRuntimeAzureSsis#subnet_id}.

---

### DataFactoryIntegrationRuntimeAzureSsisPackageStore <a name="DataFactoryIntegrationRuntimeAzureSsisPackageStore" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

&datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsisPackageStore {
	LinkedServiceName: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}. |

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore.property.linkedServiceName"></a>

```go
LinkedServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}.

---

### DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale <a name="DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

&datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale {
	NumberOfExternalNodes: *f64,
	NumberOfPipelineNodes: *f64,
	TimeToLive: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale.property.numberOfExternalNodes">NumberOfExternalNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_external_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_external_nodes}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale.property.numberOfPipelineNodes">NumberOfPipelineNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_pipeline_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_pipeline_nodes}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale.property.timeToLive">TimeToLive</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#time_to_live DataFactoryIntegrationRuntimeAzureSsis#time_to_live}. |

---

##### `NumberOfExternalNodes`<sup>Optional</sup> <a name="NumberOfExternalNodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale.property.numberOfExternalNodes"></a>

```go
NumberOfExternalNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_external_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_external_nodes}.

---

##### `NumberOfPipelineNodes`<sup>Optional</sup> <a name="NumberOfPipelineNodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale.property.numberOfPipelineNodes"></a>

```go
NumberOfPipelineNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_pipeline_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_pipeline_nodes}.

---

##### `TimeToLive`<sup>Optional</sup> <a name="TimeToLive" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale.property.timeToLive"></a>

```go
TimeToLive *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#time_to_live DataFactoryIntegrationRuntimeAzureSsis#time_to_live}.

---

### DataFactoryIntegrationRuntimeAzureSsisProxy <a name="DataFactoryIntegrationRuntimeAzureSsisProxy" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

&datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsisProxy {
	SelfHostedIntegrationRuntimeName: *string,
	StagingStorageLinkedServiceName: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy.property.selfHostedIntegrationRuntimeName">SelfHostedIntegrationRuntimeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#self_hosted_integration_runtime_name DataFactoryIntegrationRuntimeAzureSsis#self_hosted_integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy.property.stagingStorageLinkedServiceName">StagingStorageLinkedServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#staging_storage_linked_service_name DataFactoryIntegrationRuntimeAzureSsis#staging_storage_linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#path DataFactoryIntegrationRuntimeAzureSsis#path}. |

---

##### `SelfHostedIntegrationRuntimeName`<sup>Required</sup> <a name="SelfHostedIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy.property.selfHostedIntegrationRuntimeName"></a>

```go
SelfHostedIntegrationRuntimeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#self_hosted_integration_runtime_name DataFactoryIntegrationRuntimeAzureSsis#self_hosted_integration_runtime_name}.

---

##### `StagingStorageLinkedServiceName`<sup>Required</sup> <a name="StagingStorageLinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy.property.stagingStorageLinkedServiceName"></a>

```go
StagingStorageLinkedServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#staging_storage_linked_service_name DataFactoryIntegrationRuntimeAzureSsis#staging_storage_linked_service_name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#path DataFactoryIntegrationRuntimeAzureSsis#path}.

---

### DataFactoryIntegrationRuntimeAzureSsisTimeouts <a name="DataFactoryIntegrationRuntimeAzureSsisTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

&datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsisTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#create DataFactoryIntegrationRuntimeAzureSsis#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#delete DataFactoryIntegrationRuntimeAzureSsis#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#read DataFactoryIntegrationRuntimeAzureSsis#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#update DataFactoryIntegrationRuntimeAzureSsis#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#create DataFactoryIntegrationRuntimeAzureSsis#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#delete DataFactoryIntegrationRuntimeAzureSsis#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#read DataFactoryIntegrationRuntimeAzureSsis#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#update DataFactoryIntegrationRuntimeAzureSsis#update}.

---

### DataFactoryIntegrationRuntimeAzureSsisVnetIntegration <a name="DataFactoryIntegrationRuntimeAzureSsisVnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

&datafactoryintegrationruntimeazuressis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration {
	PublicIps: *[]*string,
	SubnetId: *string,
	SubnetName: *string,
	VnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.property.publicIps">PublicIps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#public_ips DataFactoryIntegrationRuntimeAzureSsis#public_ips}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_id DataFactoryIntegrationRuntimeAzureSsis#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.property.subnetName">SubnetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_name DataFactoryIntegrationRuntimeAzureSsis#subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.property.vnetId">VnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#vnet_id DataFactoryIntegrationRuntimeAzureSsis#vnet_id}. |

---

##### `PublicIps`<sup>Optional</sup> <a name="PublicIps" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.property.publicIps"></a>

```go
PublicIps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#public_ips DataFactoryIntegrationRuntimeAzureSsis#public_ips}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_id DataFactoryIntegrationRuntimeAzureSsis#subnet_id}.

---

##### `SubnetName`<sup>Optional</sup> <a name="SubnetName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.property.subnetName"></a>

```go
SubnetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_name DataFactoryIntegrationRuntimeAzureSsis#subnet_name}.

---

##### `VnetId`<sup>Optional</sup> <a name="VnetId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.property.vnetId"></a>

```go
VnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/data_factory_integration_runtime_azure_ssis#vnet_id DataFactoryIntegrationRuntimeAzureSsis#vnet_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetAdministratorLogin">ResetAdministratorLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetAdministratorPassword">ResetAdministratorPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetDualStandbyPairName">ResetDualStandbyPairName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetElasticPoolName">ResetElasticPoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetPricingTier">ResetPricingTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdministratorLogin` <a name="ResetAdministratorLogin" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetAdministratorLogin"></a>

```go
func ResetAdministratorLogin()
```

##### `ResetAdministratorPassword` <a name="ResetAdministratorPassword" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetAdministratorPassword"></a>

```go
func ResetAdministratorPassword()
```

##### `ResetDualStandbyPairName` <a name="ResetDualStandbyPairName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetDualStandbyPairName"></a>

```go
func ResetDualStandbyPairName()
```

##### `ResetElasticPoolName` <a name="ResetElasticPoolName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetElasticPoolName"></a>

```go
func ResetElasticPoolName()
```

##### `ResetPricingTier` <a name="ResetPricingTier" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetPricingTier"></a>

```go
func ResetPricingTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.administratorLoginInput">AdministratorLoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.administratorPasswordInput">AdministratorPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.dualStandbyPairNameInput">DualStandbyPairNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.elasticPoolNameInput">ElasticPoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.pricingTierInput">PricingTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.serverEndpointInput">ServerEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.administratorLogin">AdministratorLogin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.administratorPassword">AdministratorPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.dualStandbyPairName">DualStandbyPairName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.elasticPoolName">ElasticPoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.pricingTier">PricingTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.serverEndpoint">ServerEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo">DataFactoryIntegrationRuntimeAzureSsisCatalogInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdministratorLoginInput`<sup>Optional</sup> <a name="AdministratorLoginInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.administratorLoginInput"></a>

```go
func AdministratorLoginInput() *string
```

- *Type:* *string

---

##### `AdministratorPasswordInput`<sup>Optional</sup> <a name="AdministratorPasswordInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.administratorPasswordInput"></a>

```go
func AdministratorPasswordInput() *string
```

- *Type:* *string

---

##### `DualStandbyPairNameInput`<sup>Optional</sup> <a name="DualStandbyPairNameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.dualStandbyPairNameInput"></a>

```go
func DualStandbyPairNameInput() *string
```

- *Type:* *string

---

##### `ElasticPoolNameInput`<sup>Optional</sup> <a name="ElasticPoolNameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.elasticPoolNameInput"></a>

```go
func ElasticPoolNameInput() *string
```

- *Type:* *string

---

##### `PricingTierInput`<sup>Optional</sup> <a name="PricingTierInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.pricingTierInput"></a>

```go
func PricingTierInput() *string
```

- *Type:* *string

---

##### `ServerEndpointInput`<sup>Optional</sup> <a name="ServerEndpointInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.serverEndpointInput"></a>

```go
func ServerEndpointInput() *string
```

- *Type:* *string

---

##### `AdministratorLogin`<sup>Required</sup> <a name="AdministratorLogin" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.administratorLogin"></a>

```go
func AdministratorLogin() *string
```

- *Type:* *string

---

##### `AdministratorPassword`<sup>Required</sup> <a name="AdministratorPassword" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.administratorPassword"></a>

```go
func AdministratorPassword() *string
```

- *Type:* *string

---

##### `DualStandbyPairName`<sup>Required</sup> <a name="DualStandbyPairName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.dualStandbyPairName"></a>

```go
func DualStandbyPairName() *string
```

- *Type:* *string

---

##### `ElasticPoolName`<sup>Required</sup> <a name="ElasticPoolName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.elasticPoolName"></a>

```go
func ElasticPoolName() *string
```

- *Type:* *string

---

##### `PricingTier`<sup>Required</sup> <a name="PricingTier" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.pricingTier"></a>

```go
func PricingTier() *string
```

- *Type:* *string

---

##### `ServerEndpoint`<sup>Required</sup> <a name="ServerEndpoint" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.serverEndpoint"></a>

```go
func ServerEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryIntegrationRuntimeAzureSsisCatalogInfo
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo">DataFactoryIntegrationRuntimeAzureSsisCatalogInfo</a>

---


### DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.resetDataIntegrationUnit">ResetDataIntegrationUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.resetTimeToLive">ResetTimeToLive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataIntegrationUnit` <a name="ResetDataIntegrationUnit" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.resetDataIntegrationUnit"></a>

```go
func ResetDataIntegrationUnit()
```

##### `ResetTimeToLive` <a name="ResetTimeToLive" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.resetTimeToLive"></a>

```go
func ResetTimeToLive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.dataIntegrationUnitInput">DataIntegrationUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.timeToLiveInput">TimeToLiveInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.dataIntegrationUnit">DataIntegrationUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.timeToLive">TimeToLive</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataIntegrationUnitInput`<sup>Optional</sup> <a name="DataIntegrationUnitInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.dataIntegrationUnitInput"></a>

```go
func DataIntegrationUnitInput() *f64
```

- *Type:* *f64

---

##### `TimeToLiveInput`<sup>Optional</sup> <a name="TimeToLiveInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.timeToLiveInput"></a>

```go
func TimeToLiveInput() *f64
```

- *Type:* *f64

---

##### `DataIntegrationUnit`<sup>Required</sup> <a name="DataIntegrationUnit" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.dataIntegrationUnit"></a>

```go
func DataIntegrationUnit() *f64
```

- *Type:* *f64

---

##### `TimeToLive`<sup>Required</sup> <a name="TimeToLive" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.timeToLive"></a>

```go
func TimeToLive() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale</a>

---


### DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.blobContainerUriInput">BlobContainerUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.sasTokenInput">SasTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.blobContainerUri">BlobContainerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.sasToken">SasToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlobContainerUriInput`<sup>Optional</sup> <a name="BlobContainerUriInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.blobContainerUriInput"></a>

```go
func BlobContainerUriInput() *string
```

- *Type:* *string

---

##### `SasTokenInput`<sup>Optional</sup> <a name="SasTokenInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.sasTokenInput"></a>

```go
func SasTokenInput() *string
```

- *Type:* *string

---

##### `BlobContainerUri`<sup>Required</sup> <a name="BlobContainerUri" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.blobContainerUri"></a>

```go
func BlobContainerUri() *string
```

- *Type:* *string

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.sasToken"></a>

```go
func SasToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript</a>

---


### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.resetSecretVersion">ResetSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetSecretVersion` <a name="ResetSecretVersion" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.resetSecretVersion"></a>

```go
func ResetSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.linkedServiceNameInput"></a>

```go
func LinkedServiceNameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *string
```

- *Type:* *string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.linkedServiceName"></a>

```go
func LinkedServiceName() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword</a>

---


### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.get"></a>

```go
func Get(index *f64) DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.putKeyVaultPassword">PutKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.resetKeyVaultPassword">ResetKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKeyVaultPassword` <a name="PutKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.putKeyVaultPassword"></a>

```go
func PutKeyVaultPassword(value DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.putKeyVaultPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword</a>

---

##### `ResetKeyVaultPassword` <a name="ResetKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.resetKeyVaultPassword"></a>

```go
func ResetKeyVaultPassword()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.resetPassword"></a>

```go
func ResetPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.keyVaultPassword">KeyVaultPassword</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.keyVaultPasswordInput">KeyVaultPasswordInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.targetNameInput">TargetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.targetName">TargetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyVaultPassword`<sup>Required</sup> <a name="KeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.keyVaultPassword"></a>

```go
func KeyVaultPassword() DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference</a>

---

##### `KeyVaultPasswordInput`<sup>Optional</sup> <a name="KeyVaultPasswordInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.keyVaultPasswordInput"></a>

```go
func KeyVaultPasswordInput() DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `TargetNameInput`<sup>Optional</sup> <a name="TargetNameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.targetNameInput"></a>

```go
func TargetNameInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.targetName"></a>

```go
func TargetName() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.resetSecretVersion">ResetSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetSecretVersion` <a name="ResetSecretVersion" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.resetSecretVersion"></a>

```go
func ResetSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.linkedServiceNameInput"></a>

```go
func LinkedServiceNameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *string
```

- *Type:* *string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.linkedServiceName"></a>

```go
func LinkedServiceName() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense</a>

---


### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.get"></a>

```go
func Get(index *f64) DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.putKeyVaultLicense">PutKeyVaultLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.resetKeyVaultLicense">ResetKeyVaultLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.resetLicense">ResetLicense</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKeyVaultLicense` <a name="PutKeyVaultLicense" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.putKeyVaultLicense"></a>

```go
func PutKeyVaultLicense(value DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.putKeyVaultLicense.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense</a>

---

##### `ResetKeyVaultLicense` <a name="ResetKeyVaultLicense" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.resetKeyVaultLicense"></a>

```go
func ResetKeyVaultLicense()
```

##### `ResetLicense` <a name="ResetLicense" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.resetLicense"></a>

```go
func ResetLicense()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.keyVaultLicense">KeyVaultLicense</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.keyVaultLicenseInput">KeyVaultLicenseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.licenseInput">LicenseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.license">License</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyVaultLicense`<sup>Required</sup> <a name="KeyVaultLicense" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.keyVaultLicense"></a>

```go
func KeyVaultLicense() DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference</a>

---

##### `KeyVaultLicenseInput`<sup>Optional</sup> <a name="KeyVaultLicenseInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.keyVaultLicenseInput"></a>

```go
func KeyVaultLicenseInput() DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense</a>

---

##### `LicenseInput`<sup>Optional</sup> <a name="LicenseInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.licenseInput"></a>

```go
func LicenseInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `License`<sup>Required</sup> <a name="License" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.license"></a>

```go
func License() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.putCommandKey">PutCommandKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.putComponent">PutComponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resetCommandKey">ResetCommandKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resetComponent">ResetComponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resetPowershellVersion">ResetPowershellVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCommandKey` <a name="PutCommandKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.putCommandKey"></a>

```go
func PutCommandKey(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.putCommandKey.parameter.value"></a>

- *Type:* interface{}

---

##### `PutComponent` <a name="PutComponent" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.putComponent"></a>

```go
func PutComponent(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.putComponent.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCommandKey` <a name="ResetCommandKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resetCommandKey"></a>

```go
func ResetCommandKey()
```

##### `ResetComponent` <a name="ResetComponent" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resetComponent"></a>

```go
func ResetComponent()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetPowershellVersion` <a name="ResetPowershellVersion" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resetPowershellVersion"></a>

```go
func ResetPowershellVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.commandKey">CommandKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.component">Component</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.commandKeyInput">CommandKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.componentInput">ComponentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.powershellVersionInput">PowershellVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.environment">Environment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.powershellVersion">PowershellVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommandKey`<sup>Required</sup> <a name="CommandKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.commandKey"></a>

```go
func CommandKey() DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList</a>

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.component"></a>

```go
func Component() DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList</a>

---

##### `CommandKeyInput`<sup>Optional</sup> <a name="CommandKeyInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.commandKeyInput"></a>

```go
func CommandKeyInput() interface{}
```

- *Type:* interface{}

---

##### `ComponentInput`<sup>Optional</sup> <a name="ComponentInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.componentInput"></a>

```go
func ComponentInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PowershellVersionInput`<sup>Optional</sup> <a name="PowershellVersionInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.powershellVersionInput"></a>

```go
func PowershellVersionInput() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.environment"></a>

```go
func Environment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PowershellVersion`<sup>Required</sup> <a name="PowershellVersion" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.powershellVersion"></a>

```go
func PowershellVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup</a>

---


### DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration</a>

---


### DataFactoryIntegrationRuntimeAzureSsisPackageStoreList <a name="DataFactoryIntegrationRuntimeAzureSsisPackageStoreList" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisPackageStoreList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataFactoryIntegrationRuntimeAzureSsisPackageStoreList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.get"></a>

```go
func Get(index *f64) DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.linkedServiceNameInput"></a>

```go
func LinkedServiceNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.linkedServiceName"></a>

```go
func LinkedServiceName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resetNumberOfExternalNodes">ResetNumberOfExternalNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resetNumberOfPipelineNodes">ResetNumberOfPipelineNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resetTimeToLive">ResetTimeToLive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumberOfExternalNodes` <a name="ResetNumberOfExternalNodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resetNumberOfExternalNodes"></a>

```go
func ResetNumberOfExternalNodes()
```

##### `ResetNumberOfPipelineNodes` <a name="ResetNumberOfPipelineNodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resetNumberOfPipelineNodes"></a>

```go
func ResetNumberOfPipelineNodes()
```

##### `ResetTimeToLive` <a name="ResetTimeToLive" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resetTimeToLive"></a>

```go
func ResetTimeToLive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.numberOfExternalNodesInput">NumberOfExternalNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.numberOfPipelineNodesInput">NumberOfPipelineNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.timeToLiveInput">TimeToLiveInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.numberOfExternalNodes">NumberOfExternalNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.numberOfPipelineNodes">NumberOfPipelineNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.timeToLive">TimeToLive</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumberOfExternalNodesInput`<sup>Optional</sup> <a name="NumberOfExternalNodesInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.numberOfExternalNodesInput"></a>

```go
func NumberOfExternalNodesInput() *f64
```

- *Type:* *f64

---

##### `NumberOfPipelineNodesInput`<sup>Optional</sup> <a name="NumberOfPipelineNodesInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.numberOfPipelineNodesInput"></a>

```go
func NumberOfPipelineNodesInput() *f64
```

- *Type:* *f64

---

##### `TimeToLiveInput`<sup>Optional</sup> <a name="TimeToLiveInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.timeToLiveInput"></a>

```go
func TimeToLiveInput() *f64
```

- *Type:* *f64

---

##### `NumberOfExternalNodes`<sup>Required</sup> <a name="NumberOfExternalNodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.numberOfExternalNodes"></a>

```go
func NumberOfExternalNodes() *f64
```

- *Type:* *f64

---

##### `NumberOfPipelineNodes`<sup>Required</sup> <a name="NumberOfPipelineNodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.numberOfPipelineNodes"></a>

```go
func NumberOfPipelineNodes() *f64
```

- *Type:* *f64

---

##### `TimeToLive`<sup>Required</sup> <a name="TimeToLive" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.timeToLive"></a>

```go
func TimeToLive() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale</a>

---


### DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisProxyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.selfHostedIntegrationRuntimeNameInput">SelfHostedIntegrationRuntimeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.stagingStorageLinkedServiceNameInput">StagingStorageLinkedServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.selfHostedIntegrationRuntimeName">SelfHostedIntegrationRuntimeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.stagingStorageLinkedServiceName">StagingStorageLinkedServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy">DataFactoryIntegrationRuntimeAzureSsisProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `SelfHostedIntegrationRuntimeNameInput`<sup>Optional</sup> <a name="SelfHostedIntegrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.selfHostedIntegrationRuntimeNameInput"></a>

```go
func SelfHostedIntegrationRuntimeNameInput() *string
```

- *Type:* *string

---

##### `StagingStorageLinkedServiceNameInput`<sup>Optional</sup> <a name="StagingStorageLinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.stagingStorageLinkedServiceNameInput"></a>

```go
func StagingStorageLinkedServiceNameInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SelfHostedIntegrationRuntimeName`<sup>Required</sup> <a name="SelfHostedIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.selfHostedIntegrationRuntimeName"></a>

```go
func SelfHostedIntegrationRuntimeName() *string
```

- *Type:* *string

---

##### `StagingStorageLinkedServiceName`<sup>Required</sup> <a name="StagingStorageLinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.stagingStorageLinkedServiceName"></a>

```go
func StagingStorageLinkedServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryIntegrationRuntimeAzureSsisProxy
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy">DataFactoryIntegrationRuntimeAzureSsisProxy</a>

---


### DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/datafactoryintegrationruntimeazuressis"

datafactoryintegrationruntimeazuressis.NewDataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resetPublicIps">ResetPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resetSubnetName">ResetSubnetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resetVnetId">ResetVnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPublicIps` <a name="ResetPublicIps" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resetPublicIps"></a>

```go
func ResetPublicIps()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetSubnetName` <a name="ResetSubnetName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resetSubnetName"></a>

```go
func ResetSubnetName()
```

##### `ResetVnetId` <a name="ResetVnetId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resetVnetId"></a>

```go
func ResetVnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.publicIpsInput">PublicIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.subnetNameInput">SubnetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.vnetIdInput">VnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.publicIps">PublicIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.subnetName">SubnetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.vnetId">VnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisVnetIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicIpsInput`<sup>Optional</sup> <a name="PublicIpsInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.publicIpsInput"></a>

```go
func PublicIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SubnetNameInput`<sup>Optional</sup> <a name="SubnetNameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.subnetNameInput"></a>

```go
func SubnetNameInput() *string
```

- *Type:* *string

---

##### `VnetIdInput`<sup>Optional</sup> <a name="VnetIdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.vnetIdInput"></a>

```go
func VnetIdInput() *string
```

- *Type:* *string

---

##### `PublicIps`<sup>Required</sup> <a name="PublicIps" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.publicIps"></a>

```go
func PublicIps() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.subnetName"></a>

```go
func SubnetName() *string
```

- *Type:* *string

---

##### `VnetId`<sup>Required</sup> <a name="VnetId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.vnetId"></a>

```go
func VnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryIntegrationRuntimeAzureSsisVnetIntegration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisVnetIntegration</a>

---



