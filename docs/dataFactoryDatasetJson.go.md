# `dataFactoryDatasetJson` Submodule <a name="`dataFactoryDatasetJson` Submodule" id="@cdktf/provider-azurerm.dataFactoryDatasetJson"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetJson <a name="DataFactoryDatasetJson" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json azurerm_data_factory_dataset_json}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetjson"

datafactorydatasetjson.NewDataFactoryDatasetJson(scope Construct, id *string, config DataFactoryDatasetJsonConfig) DataFactoryDatasetJson
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig">DataFactoryDatasetJsonConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig">DataFactoryDatasetJsonConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.putAzureBlobStorageLocation">PutAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.putHttpServerLocation">PutHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.putSchemaColumn">PutSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetAzureBlobStorageLocation">ResetAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetHttpServerLocation">ResetHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetSchemaColumn">ResetSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAzureBlobStorageLocation` <a name="PutAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.putAzureBlobStorageLocation"></a>

```go
func PutAzureBlobStorageLocation(value DataFactoryDatasetJsonAzureBlobStorageLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.putAzureBlobStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation">DataFactoryDatasetJsonAzureBlobStorageLocation</a>

---

##### `PutHttpServerLocation` <a name="PutHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.putHttpServerLocation"></a>

```go
func PutHttpServerLocation(value DataFactoryDatasetJsonHttpServerLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.putHttpServerLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation">DataFactoryDatasetJsonHttpServerLocation</a>

---

##### `PutSchemaColumn` <a name="PutSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.putSchemaColumn"></a>

```go
func PutSchemaColumn(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.putSchemaColumn.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryDatasetJsonTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeouts">DataFactoryDatasetJsonTimeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetAdditionalProperties"></a>

```go
func ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetAzureBlobStorageLocation` <a name="ResetAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetAzureBlobStorageLocation"></a>

```go
func ResetAzureBlobStorageLocation()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetFolder"></a>

```go
func ResetFolder()
```

##### `ResetHttpServerLocation` <a name="ResetHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetHttpServerLocation"></a>

```go
func ResetHttpServerLocation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetId"></a>

```go
func ResetId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetSchemaColumn` <a name="ResetSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetSchemaColumn"></a>

```go
func ResetSchemaColumn()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryDatasetJson resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetjson"

datafactorydatasetjson.DataFactoryDatasetJson_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetjson"

datafactorydatasetjson.DataFactoryDatasetJson_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetjson"

datafactorydatasetjson.DataFactoryDatasetJson_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetjson"

datafactorydatasetjson.DataFactoryDatasetJson_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataFactoryDatasetJson resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataFactoryDatasetJson to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataFactoryDatasetJson that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryDatasetJson to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.azureBlobStorageLocation">AzureBlobStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference">DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.httpServerLocation">HttpServerLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference">DataFactoryDatasetJsonHttpServerLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.schemaColumn">SchemaColumn</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList">DataFactoryDatasetJsonSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference">DataFactoryDatasetJsonTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.annotationsInput">AnnotationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.azureBlobStorageLocationInput">AzureBlobStorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation">DataFactoryDatasetJsonAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.httpServerLocationInput">HttpServerLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation">DataFactoryDatasetJsonHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.schemaColumnInput">SchemaColumnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.annotations">Annotations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AzureBlobStorageLocation`<sup>Required</sup> <a name="AzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.azureBlobStorageLocation"></a>

```go
func AzureBlobStorageLocation() DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference">DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference</a>

---

##### `HttpServerLocation`<sup>Required</sup> <a name="HttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.httpServerLocation"></a>

```go
func HttpServerLocation() DataFactoryDatasetJsonHttpServerLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference">DataFactoryDatasetJsonHttpServerLocationOutputReference</a>

---

##### `SchemaColumn`<sup>Required</sup> <a name="SchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.schemaColumn"></a>

```go
func SchemaColumn() DataFactoryDatasetJsonSchemaColumnList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList">DataFactoryDatasetJsonSchemaColumnList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.timeouts"></a>

```go
func Timeouts() DataFactoryDatasetJsonTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference">DataFactoryDatasetJsonTimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.additionalPropertiesInput"></a>

```go
func AdditionalPropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.annotationsInput"></a>

```go
func AnnotationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AzureBlobStorageLocationInput`<sup>Optional</sup> <a name="AzureBlobStorageLocationInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.azureBlobStorageLocationInput"></a>

```go
func AzureBlobStorageLocationInput() DataFactoryDatasetJsonAzureBlobStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation">DataFactoryDatasetJsonAzureBlobStorageLocation</a>

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `HttpServerLocationInput`<sup>Optional</sup> <a name="HttpServerLocationInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.httpServerLocationInput"></a>

```go
func HttpServerLocationInput() DataFactoryDatasetJsonHttpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation">DataFactoryDatasetJsonHttpServerLocation</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.linkedServiceNameInput"></a>

```go
func LinkedServiceNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SchemaColumnInput`<sup>Optional</sup> <a name="SchemaColumnInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.schemaColumnInput"></a>

```go
func SchemaColumnInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.additionalProperties"></a>

```go
func AdditionalProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.annotations"></a>

```go
func Annotations() *[]*string
```

- *Type:* *[]*string

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.linkedServiceName"></a>

```go
func LinkedServiceName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJson.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetJsonAzureBlobStorageLocation <a name="DataFactoryDatasetJsonAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetjson"

&datafactorydatasetjson.DataFactoryDatasetJsonAzureBlobStorageLocation {
	Container: *string,
	Filename: *string,
	Path: *string,
	DynamicContainerEnabled: interface{},
	DynamicFilenameEnabled: interface{},
	DynamicPathEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation.property.container">Container</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#container DataFactoryDatasetJson#container}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation.property.filename">Filename</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#filename DataFactoryDatasetJson#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#path DataFactoryDatasetJson#path}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation.property.dynamicContainerEnabled">DynamicContainerEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#dynamic_container_enabled DataFactoryDatasetJson#dynamic_container_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation.property.dynamicFilenameEnabled">DynamicFilenameEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#dynamic_filename_enabled DataFactoryDatasetJson#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation.property.dynamicPathEnabled">DynamicPathEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#dynamic_path_enabled DataFactoryDatasetJson#dynamic_path_enabled}. |

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation.property.container"></a>

```go
Container *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#container DataFactoryDatasetJson#container}.

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#filename DataFactoryDatasetJson#filename}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#path DataFactoryDatasetJson#path}.

---

##### `DynamicContainerEnabled`<sup>Optional</sup> <a name="DynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation.property.dynamicContainerEnabled"></a>

```go
DynamicContainerEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#dynamic_container_enabled DataFactoryDatasetJson#dynamic_container_enabled}.

---

##### `DynamicFilenameEnabled`<sup>Optional</sup> <a name="DynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation.property.dynamicFilenameEnabled"></a>

```go
DynamicFilenameEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#dynamic_filename_enabled DataFactoryDatasetJson#dynamic_filename_enabled}.

---

##### `DynamicPathEnabled`<sup>Optional</sup> <a name="DynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation.property.dynamicPathEnabled"></a>

```go
DynamicPathEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#dynamic_path_enabled DataFactoryDatasetJson#dynamic_path_enabled}.

---

### DataFactoryDatasetJsonConfig <a name="DataFactoryDatasetJsonConfig" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetjson"

&datafactorydatasetjson.DataFactoryDatasetJsonConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataFactoryId: *string,
	LinkedServiceName: *string,
	Name: *string,
	AdditionalProperties: *map[string]*string,
	Annotations: *[]*string,
	AzureBlobStorageLocation: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation,
	Description: *string,
	Encoding: *string,
	Folder: *string,
	HttpServerLocation: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation,
	Id: *string,
	Parameters: *map[string]*string,
	SchemaColumn: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#data_factory_id DataFactoryDatasetJson#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#linked_service_name DataFactoryDatasetJson#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#name DataFactoryDatasetJson#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#additional_properties DataFactoryDatasetJson#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.annotations">Annotations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#annotations DataFactoryDatasetJson#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.azureBlobStorageLocation">AzureBlobStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation">DataFactoryDatasetJsonAzureBlobStorageLocation</a></code> | azure_blob_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#description DataFactoryDatasetJson#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.encoding">Encoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#encoding DataFactoryDatasetJson#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.folder">Folder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#folder DataFactoryDatasetJson#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.httpServerLocation">HttpServerLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation">DataFactoryDatasetJsonHttpServerLocation</a></code> | http_server_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#id DataFactoryDatasetJson#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#parameters DataFactoryDatasetJson#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.schemaColumn">SchemaColumn</a></code> | <code>interface{}</code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeouts">DataFactoryDatasetJsonTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#data_factory_id DataFactoryDatasetJson#data_factory_id}.

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.linkedServiceName"></a>

```go
LinkedServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#linked_service_name DataFactoryDatasetJson#linked_service_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#name DataFactoryDatasetJson#name}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.additionalProperties"></a>

```go
AdditionalProperties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#additional_properties DataFactoryDatasetJson#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.annotations"></a>

```go
Annotations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#annotations DataFactoryDatasetJson#annotations}.

---

##### `AzureBlobStorageLocation`<sup>Optional</sup> <a name="AzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.azureBlobStorageLocation"></a>

```go
AzureBlobStorageLocation DataFactoryDatasetJsonAzureBlobStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation">DataFactoryDatasetJsonAzureBlobStorageLocation</a>

azure_blob_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#azure_blob_storage_location DataFactoryDatasetJson#azure_blob_storage_location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#description DataFactoryDatasetJson#description}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#encoding DataFactoryDatasetJson#encoding}.

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#folder DataFactoryDatasetJson#folder}.

---

##### `HttpServerLocation`<sup>Optional</sup> <a name="HttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.httpServerLocation"></a>

```go
HttpServerLocation DataFactoryDatasetJsonHttpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation">DataFactoryDatasetJsonHttpServerLocation</a>

http_server_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#http_server_location DataFactoryDatasetJson#http_server_location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#id DataFactoryDatasetJson#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#parameters DataFactoryDatasetJson#parameters}.

---

##### `SchemaColumn`<sup>Optional</sup> <a name="SchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.schemaColumn"></a>

```go
SchemaColumn interface{}
```

- *Type:* interface{}

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#schema_column DataFactoryDatasetJson#schema_column}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonConfig.property.timeouts"></a>

```go
Timeouts DataFactoryDatasetJsonTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeouts">DataFactoryDatasetJsonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#timeouts DataFactoryDatasetJson#timeouts}

---

### DataFactoryDatasetJsonHttpServerLocation <a name="DataFactoryDatasetJsonHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetjson"

&datafactorydatasetjson.DataFactoryDatasetJsonHttpServerLocation {
	Filename: *string,
	Path: *string,
	RelativeUrl: *string,
	DynamicFilenameEnabled: interface{},
	DynamicPathEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation.property.filename">Filename</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#filename DataFactoryDatasetJson#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#path DataFactoryDatasetJson#path}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation.property.relativeUrl">RelativeUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#relative_url DataFactoryDatasetJson#relative_url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation.property.dynamicFilenameEnabled">DynamicFilenameEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#dynamic_filename_enabled DataFactoryDatasetJson#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation.property.dynamicPathEnabled">DynamicPathEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#dynamic_path_enabled DataFactoryDatasetJson#dynamic_path_enabled}. |

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#filename DataFactoryDatasetJson#filename}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#path DataFactoryDatasetJson#path}.

---

##### `RelativeUrl`<sup>Required</sup> <a name="RelativeUrl" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation.property.relativeUrl"></a>

```go
RelativeUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#relative_url DataFactoryDatasetJson#relative_url}.

---

##### `DynamicFilenameEnabled`<sup>Optional</sup> <a name="DynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation.property.dynamicFilenameEnabled"></a>

```go
DynamicFilenameEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#dynamic_filename_enabled DataFactoryDatasetJson#dynamic_filename_enabled}.

---

##### `DynamicPathEnabled`<sup>Optional</sup> <a name="DynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation.property.dynamicPathEnabled"></a>

```go
DynamicPathEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#dynamic_path_enabled DataFactoryDatasetJson#dynamic_path_enabled}.

---

### DataFactoryDatasetJsonSchemaColumn <a name="DataFactoryDatasetJsonSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetjson"

&datafactorydatasetjson.DataFactoryDatasetJsonSchemaColumn {
	Name: *string,
	Description: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumn.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#name DataFactoryDatasetJson#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumn.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#description DataFactoryDatasetJson#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumn.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#type DataFactoryDatasetJson#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumn.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#name DataFactoryDatasetJson#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumn.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#description DataFactoryDatasetJson#description}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumn.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#type DataFactoryDatasetJson#type}.

---

### DataFactoryDatasetJsonTimeouts <a name="DataFactoryDatasetJsonTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetjson"

&datafactorydatasetjson.DataFactoryDatasetJsonTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#create DataFactoryDatasetJson#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#delete DataFactoryDatasetJson#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#read DataFactoryDatasetJson#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#update DataFactoryDatasetJson#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#create DataFactoryDatasetJson#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#delete DataFactoryDatasetJson#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#read DataFactoryDatasetJson#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/resources/data_factory_dataset_json#update DataFactoryDatasetJson#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference <a name="DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetjson"

datafactorydatasetjson.NewDataFactoryDatasetJsonAzureBlobStorageLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled">ResetDynamicContainerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled">ResetDynamicFilenameEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled">ResetDynamicPathEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDynamicContainerEnabled` <a name="ResetDynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled"></a>

```go
func ResetDynamicContainerEnabled()
```

##### `ResetDynamicFilenameEnabled` <a name="ResetDynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled"></a>

```go
func ResetDynamicFilenameEnabled()
```

##### `ResetDynamicPathEnabled` <a name="ResetDynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled"></a>

```go
func ResetDynamicPathEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.containerInput">ContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput">DynamicContainerEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput">DynamicFilenameEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput">DynamicPathEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.container">Container</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled">DynamicContainerEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled">DynamicFilenameEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled">DynamicPathEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation">DataFactoryDatasetJsonAzureBlobStorageLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.containerInput"></a>

```go
func ContainerInput() *string
```

- *Type:* *string

---

##### `DynamicContainerEnabledInput`<sup>Optional</sup> <a name="DynamicContainerEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput"></a>

```go
func DynamicContainerEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DynamicFilenameEnabledInput`<sup>Optional</sup> <a name="DynamicFilenameEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```go
func DynamicFilenameEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DynamicPathEnabledInput`<sup>Optional</sup> <a name="DynamicPathEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput"></a>

```go
func DynamicPathEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.container"></a>

```go
func Container() *string
```

- *Type:* *string

---

##### `DynamicContainerEnabled`<sup>Required</sup> <a name="DynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled"></a>

```go
func DynamicContainerEnabled() interface{}
```

- *Type:* interface{}

---

##### `DynamicFilenameEnabled`<sup>Required</sup> <a name="DynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled"></a>

```go
func DynamicFilenameEnabled() interface{}
```

- *Type:* interface{}

---

##### `DynamicPathEnabled`<sup>Required</sup> <a name="DynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled"></a>

```go
func DynamicPathEnabled() interface{}
```

- *Type:* interface{}

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDatasetJsonAzureBlobStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonAzureBlobStorageLocation">DataFactoryDatasetJsonAzureBlobStorageLocation</a>

---


### DataFactoryDatasetJsonHttpServerLocationOutputReference <a name="DataFactoryDatasetJsonHttpServerLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetjson"

datafactorydatasetjson.NewDataFactoryDatasetJsonHttpServerLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDatasetJsonHttpServerLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.resetDynamicFilenameEnabled">ResetDynamicFilenameEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.resetDynamicPathEnabled">ResetDynamicPathEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDynamicFilenameEnabled` <a name="ResetDynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.resetDynamicFilenameEnabled"></a>

```go
func ResetDynamicFilenameEnabled()
```

##### `ResetDynamicPathEnabled` <a name="ResetDynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.resetDynamicPathEnabled"></a>

```go
func ResetDynamicPathEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput">DynamicFilenameEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.dynamicPathEnabledInput">DynamicPathEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.relativeUrlInput">RelativeUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.dynamicFilenameEnabled">DynamicFilenameEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.dynamicPathEnabled">DynamicPathEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.relativeUrl">RelativeUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation">DataFactoryDatasetJsonHttpServerLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DynamicFilenameEnabledInput`<sup>Optional</sup> <a name="DynamicFilenameEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```go
func DynamicFilenameEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DynamicPathEnabledInput`<sup>Optional</sup> <a name="DynamicPathEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.dynamicPathEnabledInput"></a>

```go
func DynamicPathEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RelativeUrlInput`<sup>Optional</sup> <a name="RelativeUrlInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.relativeUrlInput"></a>

```go
func RelativeUrlInput() *string
```

- *Type:* *string

---

##### `DynamicFilenameEnabled`<sup>Required</sup> <a name="DynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.dynamicFilenameEnabled"></a>

```go
func DynamicFilenameEnabled() interface{}
```

- *Type:* interface{}

---

##### `DynamicPathEnabled`<sup>Required</sup> <a name="DynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.dynamicPathEnabled"></a>

```go
func DynamicPathEnabled() interface{}
```

- *Type:* interface{}

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `RelativeUrl`<sup>Required</sup> <a name="RelativeUrl" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.relativeUrl"></a>

```go
func RelativeUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDatasetJsonHttpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonHttpServerLocation">DataFactoryDatasetJsonHttpServerLocation</a>

---


### DataFactoryDatasetJsonSchemaColumnList <a name="DataFactoryDatasetJsonSchemaColumnList" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetjson"

datafactorydatasetjson.NewDataFactoryDatasetJsonSchemaColumnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataFactoryDatasetJsonSchemaColumnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.get"></a>

```go
func Get(index *f64) DataFactoryDatasetJsonSchemaColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryDatasetJsonSchemaColumnOutputReference <a name="DataFactoryDatasetJsonSchemaColumnOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetjson"

datafactorydatasetjson.NewDataFactoryDatasetJsonSchemaColumnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataFactoryDatasetJsonSchemaColumnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonSchemaColumnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryDatasetJsonTimeoutsOutputReference <a name="DataFactoryDatasetJsonTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetjson"

datafactorydatasetjson.NewDataFactoryDatasetJsonTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDatasetJsonTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetJson.DataFactoryDatasetJsonTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



