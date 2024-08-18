# `dataFactoryDatasetDelimitedText` Submodule <a name="`dataFactoryDatasetDelimitedText` Submodule" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetDelimitedText <a name="DataFactoryDatasetDelimitedText" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text azurerm_data_factory_dataset_delimited_text}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

datafactorydatasetdelimitedtext.NewDataFactoryDatasetDelimitedText(scope Construct, id *string, config DataFactoryDatasetDelimitedTextConfig) DataFactoryDatasetDelimitedText
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig">DataFactoryDatasetDelimitedTextConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig">DataFactoryDatasetDelimitedTextConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobFsLocation">PutAzureBlobFsLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobStorageLocation">PutAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putHttpServerLocation">PutHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putSchemaColumn">PutSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAzureBlobFsLocation">ResetAzureBlobFsLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAzureBlobStorageLocation">ResetAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetColumnDelimiter">ResetColumnDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetCompressionCodec">ResetCompressionCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetCompressionLevel">ResetCompressionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetEscapeCharacter">ResetEscapeCharacter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetFirstRowAsHeader">ResetFirstRowAsHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetHttpServerLocation">ResetHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetNullValue">ResetNullValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetQuoteCharacter">ResetQuoteCharacter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetRowDelimiter">ResetRowDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetSchemaColumn">ResetSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAzureBlobFsLocation` <a name="PutAzureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobFsLocation"></a>

```go
func PutAzureBlobFsLocation(value DataFactoryDatasetDelimitedTextAzureBlobFsLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobFsLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a>

---

##### `PutAzureBlobStorageLocation` <a name="PutAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobStorageLocation"></a>

```go
func PutAzureBlobStorageLocation(value DataFactoryDatasetDelimitedTextAzureBlobStorageLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a>

---

##### `PutHttpServerLocation` <a name="PutHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putHttpServerLocation"></a>

```go
func PutHttpServerLocation(value DataFactoryDatasetDelimitedTextHttpServerLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putHttpServerLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a>

---

##### `PutSchemaColumn` <a name="PutSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putSchemaColumn"></a>

```go
func PutSchemaColumn(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putSchemaColumn.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryDatasetDelimitedTextTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAdditionalProperties"></a>

```go
func ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetAzureBlobFsLocation` <a name="ResetAzureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAzureBlobFsLocation"></a>

```go
func ResetAzureBlobFsLocation()
```

##### `ResetAzureBlobStorageLocation` <a name="ResetAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAzureBlobStorageLocation"></a>

```go
func ResetAzureBlobStorageLocation()
```

##### `ResetColumnDelimiter` <a name="ResetColumnDelimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetColumnDelimiter"></a>

```go
func ResetColumnDelimiter()
```

##### `ResetCompressionCodec` <a name="ResetCompressionCodec" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetCompressionCodec"></a>

```go
func ResetCompressionCodec()
```

##### `ResetCompressionLevel` <a name="ResetCompressionLevel" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetCompressionLevel"></a>

```go
func ResetCompressionLevel()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetEscapeCharacter` <a name="ResetEscapeCharacter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetEscapeCharacter"></a>

```go
func ResetEscapeCharacter()
```

##### `ResetFirstRowAsHeader` <a name="ResetFirstRowAsHeader" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetFirstRowAsHeader"></a>

```go
func ResetFirstRowAsHeader()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetFolder"></a>

```go
func ResetFolder()
```

##### `ResetHttpServerLocation` <a name="ResetHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetHttpServerLocation"></a>

```go
func ResetHttpServerLocation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetId"></a>

```go
func ResetId()
```

##### `ResetNullValue` <a name="ResetNullValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetNullValue"></a>

```go
func ResetNullValue()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetQuoteCharacter` <a name="ResetQuoteCharacter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetQuoteCharacter"></a>

```go
func ResetQuoteCharacter()
```

##### `ResetRowDelimiter` <a name="ResetRowDelimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetRowDelimiter"></a>

```go
func ResetRowDelimiter()
```

##### `ResetSchemaColumn` <a name="ResetSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetSchemaColumn"></a>

```go
func ResetSchemaColumn()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryDatasetDelimitedText resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

datafactorydatasetdelimitedtext.DataFactoryDatasetDelimitedText_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

datafactorydatasetdelimitedtext.DataFactoryDatasetDelimitedText_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

datafactorydatasetdelimitedtext.DataFactoryDatasetDelimitedText_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

datafactorydatasetdelimitedtext.DataFactoryDatasetDelimitedText_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataFactoryDatasetDelimitedText resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataFactoryDatasetDelimitedText to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataFactoryDatasetDelimitedText that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryDatasetDelimitedText to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobFsLocation">AzureBlobFsLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference">DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobStorageLocation">AzureBlobStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference">DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.httpServerLocation">HttpServerLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference">DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.schemaColumn">SchemaColumn</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList">DataFactoryDatasetDelimitedTextSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference">DataFactoryDatasetDelimitedTextTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.annotationsInput">AnnotationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobFsLocationInput">AzureBlobFsLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobStorageLocationInput">AzureBlobStorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.columnDelimiterInput">ColumnDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionCodecInput">CompressionCodecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionLevelInput">CompressionLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.escapeCharacterInput">EscapeCharacterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.firstRowAsHeaderInput">FirstRowAsHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.httpServerLocationInput">HttpServerLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nullValueInput">NullValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.quoteCharacterInput">QuoteCharacterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.rowDelimiterInput">RowDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.schemaColumnInput">SchemaColumnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.annotations">Annotations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.columnDelimiter">ColumnDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionCodec">CompressionCodec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionLevel">CompressionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.escapeCharacter">EscapeCharacter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.firstRowAsHeader">FirstRowAsHeader</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nullValue">NullValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.quoteCharacter">QuoteCharacter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.rowDelimiter">RowDelimiter</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AzureBlobFsLocation`<sup>Required</sup> <a name="AzureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobFsLocation"></a>

```go
func AzureBlobFsLocation() DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference">DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference</a>

---

##### `AzureBlobStorageLocation`<sup>Required</sup> <a name="AzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobStorageLocation"></a>

```go
func AzureBlobStorageLocation() DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference">DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference</a>

---

##### `HttpServerLocation`<sup>Required</sup> <a name="HttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.httpServerLocation"></a>

```go
func HttpServerLocation() DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference">DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference</a>

---

##### `SchemaColumn`<sup>Required</sup> <a name="SchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.schemaColumn"></a>

```go
func SchemaColumn() DataFactoryDatasetDelimitedTextSchemaColumnList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList">DataFactoryDatasetDelimitedTextSchemaColumnList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.timeouts"></a>

```go
func Timeouts() DataFactoryDatasetDelimitedTextTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference">DataFactoryDatasetDelimitedTextTimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.additionalPropertiesInput"></a>

```go
func AdditionalPropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.annotationsInput"></a>

```go
func AnnotationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AzureBlobFsLocationInput`<sup>Optional</sup> <a name="AzureBlobFsLocationInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobFsLocationInput"></a>

```go
func AzureBlobFsLocationInput() DataFactoryDatasetDelimitedTextAzureBlobFsLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a>

---

##### `AzureBlobStorageLocationInput`<sup>Optional</sup> <a name="AzureBlobStorageLocationInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobStorageLocationInput"></a>

```go
func AzureBlobStorageLocationInput() DataFactoryDatasetDelimitedTextAzureBlobStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a>

---

##### `ColumnDelimiterInput`<sup>Optional</sup> <a name="ColumnDelimiterInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.columnDelimiterInput"></a>

```go
func ColumnDelimiterInput() *string
```

- *Type:* *string

---

##### `CompressionCodecInput`<sup>Optional</sup> <a name="CompressionCodecInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionCodecInput"></a>

```go
func CompressionCodecInput() *string
```

- *Type:* *string

---

##### `CompressionLevelInput`<sup>Optional</sup> <a name="CompressionLevelInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionLevelInput"></a>

```go
func CompressionLevelInput() *string
```

- *Type:* *string

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `EscapeCharacterInput`<sup>Optional</sup> <a name="EscapeCharacterInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.escapeCharacterInput"></a>

```go
func EscapeCharacterInput() *string
```

- *Type:* *string

---

##### `FirstRowAsHeaderInput`<sup>Optional</sup> <a name="FirstRowAsHeaderInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.firstRowAsHeaderInput"></a>

```go
func FirstRowAsHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `HttpServerLocationInput`<sup>Optional</sup> <a name="HttpServerLocationInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.httpServerLocationInput"></a>

```go
func HttpServerLocationInput() DataFactoryDatasetDelimitedTextHttpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.linkedServiceNameInput"></a>

```go
func LinkedServiceNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NullValueInput`<sup>Optional</sup> <a name="NullValueInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nullValueInput"></a>

```go
func NullValueInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `QuoteCharacterInput`<sup>Optional</sup> <a name="QuoteCharacterInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.quoteCharacterInput"></a>

```go
func QuoteCharacterInput() *string
```

- *Type:* *string

---

##### `RowDelimiterInput`<sup>Optional</sup> <a name="RowDelimiterInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.rowDelimiterInput"></a>

```go
func RowDelimiterInput() *string
```

- *Type:* *string

---

##### `SchemaColumnInput`<sup>Optional</sup> <a name="SchemaColumnInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.schemaColumnInput"></a>

```go
func SchemaColumnInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.additionalProperties"></a>

```go
func AdditionalProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.annotations"></a>

```go
func Annotations() *[]*string
```

- *Type:* *[]*string

---

##### `ColumnDelimiter`<sup>Required</sup> <a name="ColumnDelimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.columnDelimiter"></a>

```go
func ColumnDelimiter() *string
```

- *Type:* *string

---

##### `CompressionCodec`<sup>Required</sup> <a name="CompressionCodec" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionCodec"></a>

```go
func CompressionCodec() *string
```

- *Type:* *string

---

##### `CompressionLevel`<sup>Required</sup> <a name="CompressionLevel" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionLevel"></a>

```go
func CompressionLevel() *string
```

- *Type:* *string

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `EscapeCharacter`<sup>Required</sup> <a name="EscapeCharacter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.escapeCharacter"></a>

```go
func EscapeCharacter() *string
```

- *Type:* *string

---

##### `FirstRowAsHeader`<sup>Required</sup> <a name="FirstRowAsHeader" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.firstRowAsHeader"></a>

```go
func FirstRowAsHeader() interface{}
```

- *Type:* interface{}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.linkedServiceName"></a>

```go
func LinkedServiceName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NullValue`<sup>Required</sup> <a name="NullValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nullValue"></a>

```go
func NullValue() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `QuoteCharacter`<sup>Required</sup> <a name="QuoteCharacter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.quoteCharacter"></a>

```go
func QuoteCharacter() *string
```

- *Type:* *string

---

##### `RowDelimiter`<sup>Required</sup> <a name="RowDelimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.rowDelimiter"></a>

```go
func RowDelimiter() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetDelimitedTextAzureBlobFsLocation <a name="DataFactoryDatasetDelimitedTextAzureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

&datafactorydatasetdelimitedtext.DataFactoryDatasetDelimitedTextAzureBlobFsLocation {
	DynamicFilenameEnabled: interface{},
	DynamicFileSystemEnabled: interface{},
	DynamicPathEnabled: interface{},
	Filename: *string,
	FileSystem: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicFilenameEnabled">DynamicFilenameEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicFileSystemEnabled">DynamicFileSystemEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#dynamic_file_system_enabled DataFactoryDatasetDelimitedText#dynamic_file_system_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicPathEnabled">DynamicPathEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.filename">Filename</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.fileSystem">FileSystem</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#file_system DataFactoryDatasetDelimitedText#file_system}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}. |

---

##### `DynamicFilenameEnabled`<sup>Optional</sup> <a name="DynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicFilenameEnabled"></a>

```go
DynamicFilenameEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}.

---

##### `DynamicFileSystemEnabled`<sup>Optional</sup> <a name="DynamicFileSystemEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicFileSystemEnabled"></a>

```go
DynamicFileSystemEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#dynamic_file_system_enabled DataFactoryDatasetDelimitedText#dynamic_file_system_enabled}.

---

##### `DynamicPathEnabled`<sup>Optional</sup> <a name="DynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicPathEnabled"></a>

```go
DynamicPathEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}.

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}.

---

##### `FileSystem`<sup>Optional</sup> <a name="FileSystem" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.fileSystem"></a>

```go
FileSystem *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#file_system DataFactoryDatasetDelimitedText#file_system}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}.

---

### DataFactoryDatasetDelimitedTextAzureBlobStorageLocation <a name="DataFactoryDatasetDelimitedTextAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

&datafactorydatasetdelimitedtext.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation {
	Container: *string,
	DynamicContainerEnabled: interface{},
	DynamicFilenameEnabled: interface{},
	DynamicPathEnabled: interface{},
	Filename: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.container">Container</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#container DataFactoryDatasetDelimitedText#container}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicContainerEnabled">DynamicContainerEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#dynamic_container_enabled DataFactoryDatasetDelimitedText#dynamic_container_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicFilenameEnabled">DynamicFilenameEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicPathEnabled">DynamicPathEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.filename">Filename</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}. |

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.container"></a>

```go
Container *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#container DataFactoryDatasetDelimitedText#container}.

---

##### `DynamicContainerEnabled`<sup>Optional</sup> <a name="DynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicContainerEnabled"></a>

```go
DynamicContainerEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#dynamic_container_enabled DataFactoryDatasetDelimitedText#dynamic_container_enabled}.

---

##### `DynamicFilenameEnabled`<sup>Optional</sup> <a name="DynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicFilenameEnabled"></a>

```go
DynamicFilenameEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}.

---

##### `DynamicPathEnabled`<sup>Optional</sup> <a name="DynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicPathEnabled"></a>

```go
DynamicPathEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}.

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}.

---

### DataFactoryDatasetDelimitedTextConfig <a name="DataFactoryDatasetDelimitedTextConfig" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

&datafactorydatasetdelimitedtext.DataFactoryDatasetDelimitedTextConfig {
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
	AzureBlobFsLocation: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation,
	AzureBlobStorageLocation: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation,
	ColumnDelimiter: *string,
	CompressionCodec: *string,
	CompressionLevel: *string,
	Description: *string,
	Encoding: *string,
	EscapeCharacter: *string,
	FirstRowAsHeader: interface{},
	Folder: *string,
	HttpServerLocation: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation,
	Id: *string,
	NullValue: *string,
	Parameters: *map[string]*string,
	QuoteCharacter: *string,
	RowDelimiter: *string,
	SchemaColumn: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#data_factory_id DataFactoryDatasetDelimitedText#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#linked_service_name DataFactoryDatasetDelimitedText#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#name DataFactoryDatasetDelimitedText#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#additional_properties DataFactoryDatasetDelimitedText#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.annotations">Annotations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#annotations DataFactoryDatasetDelimitedText#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.azureBlobFsLocation">AzureBlobFsLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a></code> | azure_blob_fs_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.azureBlobStorageLocation">AzureBlobStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a></code> | azure_blob_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.columnDelimiter">ColumnDelimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#column_delimiter DataFactoryDatasetDelimitedText#column_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.compressionCodec">CompressionCodec</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#compression_codec DataFactoryDatasetDelimitedText#compression_codec}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.compressionLevel">CompressionLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#compression_level DataFactoryDatasetDelimitedText#compression_level}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#description DataFactoryDatasetDelimitedText#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.encoding">Encoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#encoding DataFactoryDatasetDelimitedText#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.escapeCharacter">EscapeCharacter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#escape_character DataFactoryDatasetDelimitedText#escape_character}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.firstRowAsHeader">FirstRowAsHeader</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#first_row_as_header DataFactoryDatasetDelimitedText#first_row_as_header}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.folder">Folder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#folder DataFactoryDatasetDelimitedText#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.httpServerLocation">HttpServerLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a></code> | http_server_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#id DataFactoryDatasetDelimitedText#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.nullValue">NullValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#null_value DataFactoryDatasetDelimitedText#null_value}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#parameters DataFactoryDatasetDelimitedText#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.quoteCharacter">QuoteCharacter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#quote_character DataFactoryDatasetDelimitedText#quote_character}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.rowDelimiter">RowDelimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#row_delimiter DataFactoryDatasetDelimitedText#row_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.schemaColumn">SchemaColumn</a></code> | <code>interface{}</code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#data_factory_id DataFactoryDatasetDelimitedText#data_factory_id}.

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.linkedServiceName"></a>

```go
LinkedServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#linked_service_name DataFactoryDatasetDelimitedText#linked_service_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#name DataFactoryDatasetDelimitedText#name}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.additionalProperties"></a>

```go
AdditionalProperties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#additional_properties DataFactoryDatasetDelimitedText#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.annotations"></a>

```go
Annotations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#annotations DataFactoryDatasetDelimitedText#annotations}.

---

##### `AzureBlobFsLocation`<sup>Optional</sup> <a name="AzureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.azureBlobFsLocation"></a>

```go
AzureBlobFsLocation DataFactoryDatasetDelimitedTextAzureBlobFsLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a>

azure_blob_fs_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#azure_blob_fs_location DataFactoryDatasetDelimitedText#azure_blob_fs_location}

---

##### `AzureBlobStorageLocation`<sup>Optional</sup> <a name="AzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.azureBlobStorageLocation"></a>

```go
AzureBlobStorageLocation DataFactoryDatasetDelimitedTextAzureBlobStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a>

azure_blob_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#azure_blob_storage_location DataFactoryDatasetDelimitedText#azure_blob_storage_location}

---

##### `ColumnDelimiter`<sup>Optional</sup> <a name="ColumnDelimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.columnDelimiter"></a>

```go
ColumnDelimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#column_delimiter DataFactoryDatasetDelimitedText#column_delimiter}.

---

##### `CompressionCodec`<sup>Optional</sup> <a name="CompressionCodec" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.compressionCodec"></a>

```go
CompressionCodec *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#compression_codec DataFactoryDatasetDelimitedText#compression_codec}.

---

##### `CompressionLevel`<sup>Optional</sup> <a name="CompressionLevel" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.compressionLevel"></a>

```go
CompressionLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#compression_level DataFactoryDatasetDelimitedText#compression_level}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#description DataFactoryDatasetDelimitedText#description}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#encoding DataFactoryDatasetDelimitedText#encoding}.

---

##### `EscapeCharacter`<sup>Optional</sup> <a name="EscapeCharacter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.escapeCharacter"></a>

```go
EscapeCharacter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#escape_character DataFactoryDatasetDelimitedText#escape_character}.

---

##### `FirstRowAsHeader`<sup>Optional</sup> <a name="FirstRowAsHeader" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.firstRowAsHeader"></a>

```go
FirstRowAsHeader interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#first_row_as_header DataFactoryDatasetDelimitedText#first_row_as_header}.

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#folder DataFactoryDatasetDelimitedText#folder}.

---

##### `HttpServerLocation`<sup>Optional</sup> <a name="HttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.httpServerLocation"></a>

```go
HttpServerLocation DataFactoryDatasetDelimitedTextHttpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a>

http_server_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#http_server_location DataFactoryDatasetDelimitedText#http_server_location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#id DataFactoryDatasetDelimitedText#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NullValue`<sup>Optional</sup> <a name="NullValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.nullValue"></a>

```go
NullValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#null_value DataFactoryDatasetDelimitedText#null_value}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#parameters DataFactoryDatasetDelimitedText#parameters}.

---

##### `QuoteCharacter`<sup>Optional</sup> <a name="QuoteCharacter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.quoteCharacter"></a>

```go
QuoteCharacter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#quote_character DataFactoryDatasetDelimitedText#quote_character}.

---

##### `RowDelimiter`<sup>Optional</sup> <a name="RowDelimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.rowDelimiter"></a>

```go
RowDelimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#row_delimiter DataFactoryDatasetDelimitedText#row_delimiter}.

---

##### `SchemaColumn`<sup>Optional</sup> <a name="SchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.schemaColumn"></a>

```go
SchemaColumn interface{}
```

- *Type:* interface{}

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#schema_column DataFactoryDatasetDelimitedText#schema_column}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.timeouts"></a>

```go
Timeouts DataFactoryDatasetDelimitedTextTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#timeouts DataFactoryDatasetDelimitedText#timeouts}

---

### DataFactoryDatasetDelimitedTextHttpServerLocation <a name="DataFactoryDatasetDelimitedTextHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

&datafactorydatasetdelimitedtext.DataFactoryDatasetDelimitedTextHttpServerLocation {
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
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.filename">Filename</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.relativeUrl">RelativeUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#relative_url DataFactoryDatasetDelimitedText#relative_url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.dynamicFilenameEnabled">DynamicFilenameEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.dynamicPathEnabled">DynamicPathEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}. |

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}.

---

##### `RelativeUrl`<sup>Required</sup> <a name="RelativeUrl" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.relativeUrl"></a>

```go
RelativeUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#relative_url DataFactoryDatasetDelimitedText#relative_url}.

---

##### `DynamicFilenameEnabled`<sup>Optional</sup> <a name="DynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.dynamicFilenameEnabled"></a>

```go
DynamicFilenameEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}.

---

##### `DynamicPathEnabled`<sup>Optional</sup> <a name="DynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.dynamicPathEnabled"></a>

```go
DynamicPathEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}.

---

### DataFactoryDatasetDelimitedTextSchemaColumn <a name="DataFactoryDatasetDelimitedTextSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

&datafactorydatasetdelimitedtext.DataFactoryDatasetDelimitedTextSchemaColumn {
	Name: *string,
	Description: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#name DataFactoryDatasetDelimitedText#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#description DataFactoryDatasetDelimitedText#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#type DataFactoryDatasetDelimitedText#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#name DataFactoryDatasetDelimitedText#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#description DataFactoryDatasetDelimitedText#description}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#type DataFactoryDatasetDelimitedText#type}.

---

### DataFactoryDatasetDelimitedTextTimeouts <a name="DataFactoryDatasetDelimitedTextTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

&datafactorydatasetdelimitedtext.DataFactoryDatasetDelimitedTextTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#create DataFactoryDatasetDelimitedText#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#delete DataFactoryDatasetDelimitedText#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#read DataFactoryDatasetDelimitedText#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#update DataFactoryDatasetDelimitedText#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#create DataFactoryDatasetDelimitedText#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#delete DataFactoryDatasetDelimitedText#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#read DataFactoryDatasetDelimitedText#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_dataset_delimited_text#update DataFactoryDatasetDelimitedText#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference <a name="DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

datafactorydatasetdelimitedtext.NewDataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicFilenameEnabled">ResetDynamicFilenameEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicFileSystemEnabled">ResetDynamicFileSystemEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicPathEnabled">ResetDynamicPathEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetFilename">ResetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetFileSystem">ResetFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDynamicFilenameEnabled` <a name="ResetDynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicFilenameEnabled"></a>

```go
func ResetDynamicFilenameEnabled()
```

##### `ResetDynamicFileSystemEnabled` <a name="ResetDynamicFileSystemEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicFileSystemEnabled"></a>

```go
func ResetDynamicFileSystemEnabled()
```

##### `ResetDynamicPathEnabled` <a name="ResetDynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicPathEnabled"></a>

```go
func ResetDynamicPathEnabled()
```

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetFilename"></a>

```go
func ResetFilename()
```

##### `ResetFileSystem` <a name="ResetFileSystem" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetFileSystem"></a>

```go
func ResetFileSystem()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFilenameEnabledInput">DynamicFilenameEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFileSystemEnabledInput">DynamicFileSystemEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicPathEnabledInput">DynamicPathEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fileSystemInput">FileSystemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFilenameEnabled">DynamicFilenameEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFileSystemEnabled">DynamicFileSystemEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicPathEnabled">DynamicPathEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fileSystem">FileSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DynamicFilenameEnabledInput`<sup>Optional</sup> <a name="DynamicFilenameEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```go
func DynamicFilenameEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DynamicFileSystemEnabledInput`<sup>Optional</sup> <a name="DynamicFileSystemEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFileSystemEnabledInput"></a>

```go
func DynamicFileSystemEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DynamicPathEnabledInput`<sup>Optional</sup> <a name="DynamicPathEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicPathEnabledInput"></a>

```go
func DynamicPathEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `FileSystemInput`<sup>Optional</sup> <a name="FileSystemInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fileSystemInput"></a>

```go
func FileSystemInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `DynamicFilenameEnabled`<sup>Required</sup> <a name="DynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFilenameEnabled"></a>

```go
func DynamicFilenameEnabled() interface{}
```

- *Type:* interface{}

---

##### `DynamicFileSystemEnabled`<sup>Required</sup> <a name="DynamicFileSystemEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFileSystemEnabled"></a>

```go
func DynamicFileSystemEnabled() interface{}
```

- *Type:* interface{}

---

##### `DynamicPathEnabled`<sup>Required</sup> <a name="DynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicPathEnabled"></a>

```go
func DynamicPathEnabled() interface{}
```

- *Type:* interface{}

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

##### `FileSystem`<sup>Required</sup> <a name="FileSystem" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fileSystem"></a>

```go
func FileSystem() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDatasetDelimitedTextAzureBlobFsLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a>

---


### DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference <a name="DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

datafactorydatasetdelimitedtext.NewDataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled">ResetDynamicContainerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled">ResetDynamicFilenameEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled">ResetDynamicPathEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetFilename">ResetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDynamicContainerEnabled` <a name="ResetDynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled"></a>

```go
func ResetDynamicContainerEnabled()
```

##### `ResetDynamicFilenameEnabled` <a name="ResetDynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled"></a>

```go
func ResetDynamicFilenameEnabled()
```

##### `ResetDynamicPathEnabled` <a name="ResetDynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled"></a>

```go
func ResetDynamicPathEnabled()
```

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetFilename"></a>

```go
func ResetFilename()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.containerInput">ContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput">DynamicContainerEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput">DynamicFilenameEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput">DynamicPathEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.container">Container</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled">DynamicContainerEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled">DynamicFilenameEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled">DynamicPathEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.containerInput"></a>

```go
func ContainerInput() *string
```

- *Type:* *string

---

##### `DynamicContainerEnabledInput`<sup>Optional</sup> <a name="DynamicContainerEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput"></a>

```go
func DynamicContainerEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DynamicFilenameEnabledInput`<sup>Optional</sup> <a name="DynamicFilenameEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```go
func DynamicFilenameEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DynamicPathEnabledInput`<sup>Optional</sup> <a name="DynamicPathEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput"></a>

```go
func DynamicPathEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.container"></a>

```go
func Container() *string
```

- *Type:* *string

---

##### `DynamicContainerEnabled`<sup>Required</sup> <a name="DynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled"></a>

```go
func DynamicContainerEnabled() interface{}
```

- *Type:* interface{}

---

##### `DynamicFilenameEnabled`<sup>Required</sup> <a name="DynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled"></a>

```go
func DynamicFilenameEnabled() interface{}
```

- *Type:* interface{}

---

##### `DynamicPathEnabled`<sup>Required</sup> <a name="DynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled"></a>

```go
func DynamicPathEnabled() interface{}
```

- *Type:* interface{}

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDatasetDelimitedTextAzureBlobStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a>

---


### DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference <a name="DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

datafactorydatasetdelimitedtext.NewDataFactoryDatasetDelimitedTextHttpServerLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resetDynamicFilenameEnabled">ResetDynamicFilenameEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resetDynamicPathEnabled">ResetDynamicPathEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDynamicFilenameEnabled` <a name="ResetDynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resetDynamicFilenameEnabled"></a>

```go
func ResetDynamicFilenameEnabled()
```

##### `ResetDynamicPathEnabled` <a name="ResetDynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resetDynamicPathEnabled"></a>

```go
func ResetDynamicPathEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput">DynamicFilenameEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicPathEnabledInput">DynamicPathEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.relativeUrlInput">RelativeUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicFilenameEnabled">DynamicFilenameEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicPathEnabled">DynamicPathEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.relativeUrl">RelativeUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DynamicFilenameEnabledInput`<sup>Optional</sup> <a name="DynamicFilenameEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```go
func DynamicFilenameEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DynamicPathEnabledInput`<sup>Optional</sup> <a name="DynamicPathEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicPathEnabledInput"></a>

```go
func DynamicPathEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RelativeUrlInput`<sup>Optional</sup> <a name="RelativeUrlInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.relativeUrlInput"></a>

```go
func RelativeUrlInput() *string
```

- *Type:* *string

---

##### `DynamicFilenameEnabled`<sup>Required</sup> <a name="DynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicFilenameEnabled"></a>

```go
func DynamicFilenameEnabled() interface{}
```

- *Type:* interface{}

---

##### `DynamicPathEnabled`<sup>Required</sup> <a name="DynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicPathEnabled"></a>

```go
func DynamicPathEnabled() interface{}
```

- *Type:* interface{}

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `RelativeUrl`<sup>Required</sup> <a name="RelativeUrl" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.relativeUrl"></a>

```go
func RelativeUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDatasetDelimitedTextHttpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a>

---


### DataFactoryDatasetDelimitedTextSchemaColumnList <a name="DataFactoryDatasetDelimitedTextSchemaColumnList" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

datafactorydatasetdelimitedtext.NewDataFactoryDatasetDelimitedTextSchemaColumnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataFactoryDatasetDelimitedTextSchemaColumnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.get"></a>

```go
func Get(index *f64) DataFactoryDatasetDelimitedTextSchemaColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryDatasetDelimitedTextSchemaColumnOutputReference <a name="DataFactoryDatasetDelimitedTextSchemaColumnOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

datafactorydatasetdelimitedtext.NewDataFactoryDatasetDelimitedTextSchemaColumnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataFactoryDatasetDelimitedTextSchemaColumnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryDatasetDelimitedTextTimeoutsOutputReference <a name="DataFactoryDatasetDelimitedTextTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydatasetdelimitedtext"

datafactorydatasetdelimitedtext.NewDataFactoryDatasetDelimitedTextTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDatasetDelimitedTextTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



