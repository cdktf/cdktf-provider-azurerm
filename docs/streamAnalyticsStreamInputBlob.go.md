# `streamAnalyticsStreamInputBlob` Submodule <a name="`streamAnalyticsStreamInputBlob` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsStreamInputBlob <a name="StreamAnalyticsStreamInputBlob" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob azurerm_stream_analytics_stream_input_blob}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/streamanalyticsstreaminputblob"

streamanalyticsstreaminputblob.NewStreamAnalyticsStreamInputBlob(scope Construct, id *string, config StreamAnalyticsStreamInputBlobConfig) StreamAnalyticsStreamInputBlob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig">StreamAnalyticsStreamInputBlobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig">StreamAnalyticsStreamInputBlobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putSerialization">PutSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSerialization` <a name="PutSerialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putSerialization"></a>

```go
func PutSerialization(value StreamAnalyticsStreamInputBlobSerialization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putTimeouts"></a>

```go
func PutTimeouts(value StreamAnalyticsStreamInputBlobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsStreamInputBlob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/streamanalyticsstreaminputblob"

streamanalyticsstreaminputblob.StreamAnalyticsStreamInputBlob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/streamanalyticsstreaminputblob"

streamanalyticsstreaminputblob.StreamAnalyticsStreamInputBlob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/streamanalyticsstreaminputblob"

streamanalyticsstreaminputblob.StreamAnalyticsStreamInputBlob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/streamanalyticsstreaminputblob"

streamanalyticsstreaminputblob.StreamAnalyticsStreamInputBlob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StreamAnalyticsStreamInputBlob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StreamAnalyticsStreamInputBlob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StreamAnalyticsStreamInputBlob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsStreamInputBlob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference">StreamAnalyticsStreamInputBlobSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference">StreamAnalyticsStreamInputBlobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dateFormatInput">DateFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.pathPatternInput">PathPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.serializationInput">SerializationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountKeyInput">StorageAccountKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageContainerNameInput">StorageContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.streamAnalyticsJobNameInput">StreamAnalyticsJobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeFormatInput">TimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.pathPattern">PathPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountKey">StorageAccountKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageContainerName">StorageContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.serialization"></a>

```go
func Serialization() StreamAnalyticsStreamInputBlobSerializationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference">StreamAnalyticsStreamInputBlobSerializationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeouts"></a>

```go
func Timeouts() StreamAnalyticsStreamInputBlobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference">StreamAnalyticsStreamInputBlobTimeoutsOutputReference</a>

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dateFormatInput"></a>

```go
func DateFormatInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathPatternInput`<sup>Optional</sup> <a name="PathPatternInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.pathPatternInput"></a>

```go
func PathPatternInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SerializationInput`<sup>Optional</sup> <a name="SerializationInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.serializationInput"></a>

```go
func SerializationInput() StreamAnalyticsStreamInputBlobSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a>

---

##### `StorageAccountKeyInput`<sup>Optional</sup> <a name="StorageAccountKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountKeyInput"></a>

```go
func StorageAccountKeyInput() *string
```

- *Type:* *string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountNameInput"></a>

```go
func StorageAccountNameInput() *string
```

- *Type:* *string

---

##### `StorageContainerNameInput`<sup>Optional</sup> <a name="StorageContainerNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageContainerNameInput"></a>

```go
func StorageContainerNameInput() *string
```

- *Type:* *string

---

##### `StreamAnalyticsJobNameInput`<sup>Optional</sup> <a name="StreamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.streamAnalyticsJobNameInput"></a>

```go
func StreamAnalyticsJobNameInput() *string
```

- *Type:* *string

---

##### `TimeFormatInput`<sup>Optional</sup> <a name="TimeFormatInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeFormatInput"></a>

```go
func TimeFormatInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PathPattern`<sup>Required</sup> <a name="PathPattern" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.pathPattern"></a>

```go
func PathPattern() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountKey"></a>

```go
func StorageAccountKey() *string
```

- *Type:* *string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountName"></a>

```go
func StorageAccountName() *string
```

- *Type:* *string

---

##### `StorageContainerName`<sup>Required</sup> <a name="StorageContainerName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageContainerName"></a>

```go
func StorageContainerName() *string
```

- *Type:* *string

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.streamAnalyticsJobName"></a>

```go
func StreamAnalyticsJobName() *string
```

- *Type:* *string

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsStreamInputBlobConfig <a name="StreamAnalyticsStreamInputBlobConfig" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/streamanalyticsstreaminputblob"

&streamanalyticsstreaminputblob.StreamAnalyticsStreamInputBlobConfig {
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
	Serialization: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization,
	StorageAccountKey: *string,
	StorageAccountName: *string,
	StorageContainerName: *string,
	StreamAnalyticsJobName: *string,
	TimeFormat: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.dateFormat">DateFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#date_format StreamAnalyticsStreamInputBlob#date_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#name StreamAnalyticsStreamInputBlob#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.pathPattern">PathPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#path_pattern StreamAnalyticsStreamInputBlob#path_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#resource_group_name StreamAnalyticsStreamInputBlob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageAccountKey">StorageAccountKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#storage_account_key StreamAnalyticsStreamInputBlob#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#storage_account_name StreamAnalyticsStreamInputBlob#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageContainerName">StorageContainerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#storage_container_name StreamAnalyticsStreamInputBlob#storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#stream_analytics_job_name StreamAnalyticsStreamInputBlob#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#time_format StreamAnalyticsStreamInputBlob#time_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#id StreamAnalyticsStreamInputBlob#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.dateFormat"></a>

```go
DateFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#date_format StreamAnalyticsStreamInputBlob#date_format}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#name StreamAnalyticsStreamInputBlob#name}.

---

##### `PathPattern`<sup>Required</sup> <a name="PathPattern" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.pathPattern"></a>

```go
PathPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#path_pattern StreamAnalyticsStreamInputBlob#path_pattern}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#resource_group_name StreamAnalyticsStreamInputBlob#resource_group_name}.

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.serialization"></a>

```go
Serialization StreamAnalyticsStreamInputBlobSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#serialization StreamAnalyticsStreamInputBlob#serialization}

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageAccountKey"></a>

```go
StorageAccountKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#storage_account_key StreamAnalyticsStreamInputBlob#storage_account_key}.

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageAccountName"></a>

```go
StorageAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#storage_account_name StreamAnalyticsStreamInputBlob#storage_account_name}.

---

##### `StorageContainerName`<sup>Required</sup> <a name="StorageContainerName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageContainerName"></a>

```go
StorageContainerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#storage_container_name StreamAnalyticsStreamInputBlob#storage_container_name}.

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.streamAnalyticsJobName"></a>

```go
StreamAnalyticsJobName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#stream_analytics_job_name StreamAnalyticsStreamInputBlob#stream_analytics_job_name}.

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.timeFormat"></a>

```go
TimeFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#time_format StreamAnalyticsStreamInputBlob#time_format}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#id StreamAnalyticsStreamInputBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.timeouts"></a>

```go
Timeouts StreamAnalyticsStreamInputBlobTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#timeouts StreamAnalyticsStreamInputBlob#timeouts}

---

### StreamAnalyticsStreamInputBlobSerialization <a name="StreamAnalyticsStreamInputBlobSerialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/streamanalyticsstreaminputblob"

&streamanalyticsstreaminputblob.StreamAnalyticsStreamInputBlobSerialization {
	Type: *string,
	Encoding: *string,
	FieldDelimiter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#type StreamAnalyticsStreamInputBlob#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.encoding">Encoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#encoding StreamAnalyticsStreamInputBlob#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#field_delimiter StreamAnalyticsStreamInputBlob#field_delimiter}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#type StreamAnalyticsStreamInputBlob#type}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#encoding StreamAnalyticsStreamInputBlob#encoding}.

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.fieldDelimiter"></a>

```go
FieldDelimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#field_delimiter StreamAnalyticsStreamInputBlob#field_delimiter}.

---

### StreamAnalyticsStreamInputBlobTimeouts <a name="StreamAnalyticsStreamInputBlobTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/streamanalyticsstreaminputblob"

&streamanalyticsstreaminputblob.StreamAnalyticsStreamInputBlobTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#create StreamAnalyticsStreamInputBlob#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#delete StreamAnalyticsStreamInputBlob#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#read StreamAnalyticsStreamInputBlob#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#update StreamAnalyticsStreamInputBlob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#create StreamAnalyticsStreamInputBlob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#delete StreamAnalyticsStreamInputBlob#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#read StreamAnalyticsStreamInputBlob#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_stream_input_blob#update StreamAnalyticsStreamInputBlob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsStreamInputBlobSerializationOutputReference <a name="StreamAnalyticsStreamInputBlobSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/streamanalyticsstreaminputblob"

streamanalyticsstreaminputblob.NewStreamAnalyticsStreamInputBlobSerializationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamAnalyticsStreamInputBlobSerializationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resetFieldDelimiter"></a>

```go
func ResetFieldDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fieldDelimiterInput"></a>

```go
func FieldDelimiterInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.internalValue"></a>

```go
func InternalValue() StreamAnalyticsStreamInputBlobSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a>

---


### StreamAnalyticsStreamInputBlobTimeoutsOutputReference <a name="StreamAnalyticsStreamInputBlobTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/streamanalyticsstreaminputblob"

streamanalyticsstreaminputblob.NewStreamAnalyticsStreamInputBlobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamAnalyticsStreamInputBlobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



