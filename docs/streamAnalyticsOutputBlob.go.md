# `streamAnalyticsOutputBlob` Submodule <a name="`streamAnalyticsOutputBlob` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsOutputBlob <a name="StreamAnalyticsOutputBlob" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob azurerm_stream_analytics_output_blob}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/streamanalyticsoutputblob"

streamanalyticsoutputblob.NewStreamAnalyticsOutputBlob(scope Construct, id *string, config StreamAnalyticsOutputBlobConfig) StreamAnalyticsOutputBlob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig">StreamAnalyticsOutputBlobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig">StreamAnalyticsOutputBlobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putSerialization">PutSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetAuthenticationMode">ResetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBatchMaxWaitTime">ResetBatchMaxWaitTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBatchMinRows">ResetBatchMinRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBlobWriteMode">ResetBlobWriteMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetStorageAccountKey">ResetStorageAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSerialization` <a name="PutSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putSerialization"></a>

```go
func PutSerialization(value StreamAnalyticsOutputBlobSerialization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putTimeouts"></a>

```go
func PutTimeouts(value StreamAnalyticsOutputBlobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a>

---

##### `ResetAuthenticationMode` <a name="ResetAuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetAuthenticationMode"></a>

```go
func ResetAuthenticationMode()
```

##### `ResetBatchMaxWaitTime` <a name="ResetBatchMaxWaitTime" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBatchMaxWaitTime"></a>

```go
func ResetBatchMaxWaitTime()
```

##### `ResetBatchMinRows` <a name="ResetBatchMinRows" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBatchMinRows"></a>

```go
func ResetBatchMinRows()
```

##### `ResetBlobWriteMode` <a name="ResetBlobWriteMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBlobWriteMode"></a>

```go
func ResetBlobWriteMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetId"></a>

```go
func ResetId()
```

##### `ResetStorageAccountKey` <a name="ResetStorageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetStorageAccountKey"></a>

```go
func ResetStorageAccountKey()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsOutputBlob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/streamanalyticsoutputblob"

streamanalyticsoutputblob.StreamAnalyticsOutputBlob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/streamanalyticsoutputblob"

streamanalyticsoutputblob.StreamAnalyticsOutputBlob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/streamanalyticsoutputblob"

streamanalyticsoutputblob.StreamAnalyticsOutputBlob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/streamanalyticsoutputblob"

streamanalyticsoutputblob.StreamAnalyticsOutputBlob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StreamAnalyticsOutputBlob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StreamAnalyticsOutputBlob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StreamAnalyticsOutputBlob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsOutputBlob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference">StreamAnalyticsOutputBlobSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference">StreamAnalyticsOutputBlobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.authenticationModeInput">AuthenticationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMaxWaitTimeInput">BatchMaxWaitTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMinRowsInput">BatchMinRowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.blobWriteModeInput">BlobWriteModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dateFormatInput">DateFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.pathPatternInput">PathPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.serializationInput">SerializationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountKeyInput">StorageAccountKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageContainerNameInput">StorageContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.streamAnalyticsJobNameInput">StreamAnalyticsJobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeFormatInput">TimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.authenticationMode">AuthenticationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMaxWaitTime">BatchMaxWaitTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMinRows">BatchMinRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.blobWriteMode">BlobWriteMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.pathPattern">PathPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountKey">StorageAccountKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageContainerName">StorageContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.serialization"></a>

```go
func Serialization() StreamAnalyticsOutputBlobSerializationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference">StreamAnalyticsOutputBlobSerializationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeouts"></a>

```go
func Timeouts() StreamAnalyticsOutputBlobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference">StreamAnalyticsOutputBlobTimeoutsOutputReference</a>

---

##### `AuthenticationModeInput`<sup>Optional</sup> <a name="AuthenticationModeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.authenticationModeInput"></a>

```go
func AuthenticationModeInput() *string
```

- *Type:* *string

---

##### `BatchMaxWaitTimeInput`<sup>Optional</sup> <a name="BatchMaxWaitTimeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMaxWaitTimeInput"></a>

```go
func BatchMaxWaitTimeInput() *string
```

- *Type:* *string

---

##### `BatchMinRowsInput`<sup>Optional</sup> <a name="BatchMinRowsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMinRowsInput"></a>

```go
func BatchMinRowsInput() *f64
```

- *Type:* *f64

---

##### `BlobWriteModeInput`<sup>Optional</sup> <a name="BlobWriteModeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.blobWriteModeInput"></a>

```go
func BlobWriteModeInput() *string
```

- *Type:* *string

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dateFormatInput"></a>

```go
func DateFormatInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathPatternInput`<sup>Optional</sup> <a name="PathPatternInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.pathPatternInput"></a>

```go
func PathPatternInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SerializationInput`<sup>Optional</sup> <a name="SerializationInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.serializationInput"></a>

```go
func SerializationInput() StreamAnalyticsOutputBlobSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a>

---

##### `StorageAccountKeyInput`<sup>Optional</sup> <a name="StorageAccountKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountKeyInput"></a>

```go
func StorageAccountKeyInput() *string
```

- *Type:* *string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountNameInput"></a>

```go
func StorageAccountNameInput() *string
```

- *Type:* *string

---

##### `StorageContainerNameInput`<sup>Optional</sup> <a name="StorageContainerNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageContainerNameInput"></a>

```go
func StorageContainerNameInput() *string
```

- *Type:* *string

---

##### `StreamAnalyticsJobNameInput`<sup>Optional</sup> <a name="StreamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.streamAnalyticsJobNameInput"></a>

```go
func StreamAnalyticsJobNameInput() *string
```

- *Type:* *string

---

##### `TimeFormatInput`<sup>Optional</sup> <a name="TimeFormatInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeFormatInput"></a>

```go
func TimeFormatInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.authenticationMode"></a>

```go
func AuthenticationMode() *string
```

- *Type:* *string

---

##### `BatchMaxWaitTime`<sup>Required</sup> <a name="BatchMaxWaitTime" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMaxWaitTime"></a>

```go
func BatchMaxWaitTime() *string
```

- *Type:* *string

---

##### `BatchMinRows`<sup>Required</sup> <a name="BatchMinRows" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMinRows"></a>

```go
func BatchMinRows() *f64
```

- *Type:* *f64

---

##### `BlobWriteMode`<sup>Required</sup> <a name="BlobWriteMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.blobWriteMode"></a>

```go
func BlobWriteMode() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PathPattern`<sup>Required</sup> <a name="PathPattern" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.pathPattern"></a>

```go
func PathPattern() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountKey"></a>

```go
func StorageAccountKey() *string
```

- *Type:* *string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountName"></a>

```go
func StorageAccountName() *string
```

- *Type:* *string

---

##### `StorageContainerName`<sup>Required</sup> <a name="StorageContainerName" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageContainerName"></a>

```go
func StorageContainerName() *string
```

- *Type:* *string

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.streamAnalyticsJobName"></a>

```go
func StreamAnalyticsJobName() *string
```

- *Type:* *string

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsOutputBlobConfig <a name="StreamAnalyticsOutputBlobConfig" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/streamanalyticsoutputblob"

&streamanalyticsoutputblob.StreamAnalyticsOutputBlobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DateFormat: *string,
	Name: *string,
	PathPattern: *string,
	ResourceGroupName: *string,
	Serialization: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization,
	StorageAccountName: *string,
	StorageContainerName: *string,
	StreamAnalyticsJobName: *string,
	TimeFormat: *string,
	AuthenticationMode: *string,
	BatchMaxWaitTime: *string,
	BatchMinRows: *f64,
	BlobWriteMode: *string,
	Id: *string,
	StorageAccountKey: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.dateFormat">DateFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#date_format StreamAnalyticsOutputBlob#date_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#name StreamAnalyticsOutputBlob#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.pathPattern">PathPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#path_pattern StreamAnalyticsOutputBlob#path_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#resource_group_name StreamAnalyticsOutputBlob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#storage_account_name StreamAnalyticsOutputBlob#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageContainerName">StorageContainerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#storage_container_name StreamAnalyticsOutputBlob#storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#stream_analytics_job_name StreamAnalyticsOutputBlob#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#time_format StreamAnalyticsOutputBlob#time_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.authenticationMode">AuthenticationMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#authentication_mode StreamAnalyticsOutputBlob#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.batchMaxWaitTime">BatchMaxWaitTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#batch_max_wait_time StreamAnalyticsOutputBlob#batch_max_wait_time}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.batchMinRows">BatchMinRows</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#batch_min_rows StreamAnalyticsOutputBlob#batch_min_rows}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.blobWriteMode">BlobWriteMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#blob_write_mode StreamAnalyticsOutputBlob#blob_write_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#id StreamAnalyticsOutputBlob#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageAccountKey">StorageAccountKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#storage_account_key StreamAnalyticsOutputBlob#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.dateFormat"></a>

```go
DateFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#date_format StreamAnalyticsOutputBlob#date_format}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#name StreamAnalyticsOutputBlob#name}.

---

##### `PathPattern`<sup>Required</sup> <a name="PathPattern" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.pathPattern"></a>

```go
PathPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#path_pattern StreamAnalyticsOutputBlob#path_pattern}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#resource_group_name StreamAnalyticsOutputBlob#resource_group_name}.

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.serialization"></a>

```go
Serialization StreamAnalyticsOutputBlobSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#serialization StreamAnalyticsOutputBlob#serialization}

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageAccountName"></a>

```go
StorageAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#storage_account_name StreamAnalyticsOutputBlob#storage_account_name}.

---

##### `StorageContainerName`<sup>Required</sup> <a name="StorageContainerName" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageContainerName"></a>

```go
StorageContainerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#storage_container_name StreamAnalyticsOutputBlob#storage_container_name}.

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.streamAnalyticsJobName"></a>

```go
StreamAnalyticsJobName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#stream_analytics_job_name StreamAnalyticsOutputBlob#stream_analytics_job_name}.

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.timeFormat"></a>

```go
TimeFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#time_format StreamAnalyticsOutputBlob#time_format}.

---

##### `AuthenticationMode`<sup>Optional</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.authenticationMode"></a>

```go
AuthenticationMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#authentication_mode StreamAnalyticsOutputBlob#authentication_mode}.

---

##### `BatchMaxWaitTime`<sup>Optional</sup> <a name="BatchMaxWaitTime" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.batchMaxWaitTime"></a>

```go
BatchMaxWaitTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#batch_max_wait_time StreamAnalyticsOutputBlob#batch_max_wait_time}.

---

##### `BatchMinRows`<sup>Optional</sup> <a name="BatchMinRows" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.batchMinRows"></a>

```go
BatchMinRows *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#batch_min_rows StreamAnalyticsOutputBlob#batch_min_rows}.

---

##### `BlobWriteMode`<sup>Optional</sup> <a name="BlobWriteMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.blobWriteMode"></a>

```go
BlobWriteMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#blob_write_mode StreamAnalyticsOutputBlob#blob_write_mode}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#id StreamAnalyticsOutputBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StorageAccountKey`<sup>Optional</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageAccountKey"></a>

```go
StorageAccountKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#storage_account_key StreamAnalyticsOutputBlob#storage_account_key}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.timeouts"></a>

```go
Timeouts StreamAnalyticsOutputBlobTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#timeouts StreamAnalyticsOutputBlob#timeouts}

---

### StreamAnalyticsOutputBlobSerialization <a name="StreamAnalyticsOutputBlobSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/streamanalyticsoutputblob"

&streamanalyticsoutputblob.StreamAnalyticsOutputBlobSerialization {
	Type: *string,
	Encoding: *string,
	FieldDelimiter: *string,
	Format: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#type StreamAnalyticsOutputBlob#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.encoding">Encoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#encoding StreamAnalyticsOutputBlob#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#field_delimiter StreamAnalyticsOutputBlob#field_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#format StreamAnalyticsOutputBlob#format}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#type StreamAnalyticsOutputBlob#type}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#encoding StreamAnalyticsOutputBlob#encoding}.

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.fieldDelimiter"></a>

```go
FieldDelimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#field_delimiter StreamAnalyticsOutputBlob#field_delimiter}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#format StreamAnalyticsOutputBlob#format}.

---

### StreamAnalyticsOutputBlobTimeouts <a name="StreamAnalyticsOutputBlobTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/streamanalyticsoutputblob"

&streamanalyticsoutputblob.StreamAnalyticsOutputBlobTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#create StreamAnalyticsOutputBlob#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#delete StreamAnalyticsOutputBlob#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#read StreamAnalyticsOutputBlob#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#update StreamAnalyticsOutputBlob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#create StreamAnalyticsOutputBlob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#delete StreamAnalyticsOutputBlob#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#read StreamAnalyticsOutputBlob#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/stream_analytics_output_blob#update StreamAnalyticsOutputBlob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsOutputBlobSerializationOutputReference <a name="StreamAnalyticsOutputBlobSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/streamanalyticsoutputblob"

streamanalyticsoutputblob.NewStreamAnalyticsOutputBlobSerializationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamAnalyticsOutputBlobSerializationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetFieldDelimiter"></a>

```go
func ResetFieldDelimiter()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetFormat"></a>

```go
func ResetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fieldDelimiterInput"></a>

```go
func FieldDelimiterInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.internalValue"></a>

```go
func InternalValue() StreamAnalyticsOutputBlobSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a>

---


### StreamAnalyticsOutputBlobTimeoutsOutputReference <a name="StreamAnalyticsOutputBlobTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/streamanalyticsoutputblob"

streamanalyticsoutputblob.NewStreamAnalyticsOutputBlobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamAnalyticsOutputBlobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



