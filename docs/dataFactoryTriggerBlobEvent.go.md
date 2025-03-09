# `dataFactoryTriggerBlobEvent` Submodule <a name="`dataFactoryTriggerBlobEvent` Submodule" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryTriggerBlobEvent <a name="DataFactoryTriggerBlobEvent" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event azurerm_data_factory_trigger_blob_event}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorytriggerblobevent"

datafactorytriggerblobevent.NewDataFactoryTriggerBlobEvent(scope Construct, id *string, config DataFactoryTriggerBlobEventConfig) DataFactoryTriggerBlobEvent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig">DataFactoryTriggerBlobEventConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig">DataFactoryTriggerBlobEventConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.putPipeline">PutPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetActivated">ResetActivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetBlobPathBeginsWith">ResetBlobPathBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetBlobPathEndsWith">ResetBlobPathEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetIgnoreEmptyBlobs">ResetIgnoreEmptyBlobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPipeline` <a name="PutPipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.putPipeline"></a>

```go
func PutPipeline(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.putPipeline.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryTriggerBlobEventTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts">DataFactoryTriggerBlobEventTimeouts</a>

---

##### `ResetActivated` <a name="ResetActivated" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetActivated"></a>

```go
func ResetActivated()
```

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetAdditionalProperties"></a>

```go
func ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetBlobPathBeginsWith` <a name="ResetBlobPathBeginsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetBlobPathBeginsWith"></a>

```go
func ResetBlobPathBeginsWith()
```

##### `ResetBlobPathEndsWith` <a name="ResetBlobPathEndsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetBlobPathEndsWith"></a>

```go
func ResetBlobPathEndsWith()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreEmptyBlobs` <a name="ResetIgnoreEmptyBlobs" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetIgnoreEmptyBlobs"></a>

```go
func ResetIgnoreEmptyBlobs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryTriggerBlobEvent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorytriggerblobevent"

datafactorytriggerblobevent.DataFactoryTriggerBlobEvent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorytriggerblobevent"

datafactorytriggerblobevent.DataFactoryTriggerBlobEvent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorytriggerblobevent"

datafactorytriggerblobevent.DataFactoryTriggerBlobEvent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorytriggerblobevent"

datafactorytriggerblobevent.DataFactoryTriggerBlobEvent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataFactoryTriggerBlobEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataFactoryTriggerBlobEvent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataFactoryTriggerBlobEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryTriggerBlobEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.pipeline">Pipeline</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList">DataFactoryTriggerBlobEventPipelineList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference">DataFactoryTriggerBlobEventTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.activatedInput">ActivatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.annotationsInput">AnnotationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.blobPathBeginsWithInput">BlobPathBeginsWithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.blobPathEndsWithInput">BlobPathEndsWithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.eventsInput">EventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.ignoreEmptyBlobsInput">IgnoreEmptyBlobsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.pipelineInput">PipelineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.activated">Activated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.annotations">Annotations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.blobPathBeginsWith">BlobPathBeginsWith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.blobPathEndsWith">BlobPathEndsWith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.events">Events</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.ignoreEmptyBlobs">IgnoreEmptyBlobs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.pipeline"></a>

```go
func Pipeline() DataFactoryTriggerBlobEventPipelineList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList">DataFactoryTriggerBlobEventPipelineList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.timeouts"></a>

```go
func Timeouts() DataFactoryTriggerBlobEventTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference">DataFactoryTriggerBlobEventTimeoutsOutputReference</a>

---

##### `ActivatedInput`<sup>Optional</sup> <a name="ActivatedInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.activatedInput"></a>

```go
func ActivatedInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.additionalPropertiesInput"></a>

```go
func AdditionalPropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.annotationsInput"></a>

```go
func AnnotationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BlobPathBeginsWithInput`<sup>Optional</sup> <a name="BlobPathBeginsWithInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.blobPathBeginsWithInput"></a>

```go
func BlobPathBeginsWithInput() *string
```

- *Type:* *string

---

##### `BlobPathEndsWithInput`<sup>Optional</sup> <a name="BlobPathEndsWithInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.blobPathEndsWithInput"></a>

```go
func BlobPathEndsWithInput() *string
```

- *Type:* *string

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.eventsInput"></a>

```go
func EventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreEmptyBlobsInput`<sup>Optional</sup> <a name="IgnoreEmptyBlobsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.ignoreEmptyBlobsInput"></a>

```go
func IgnoreEmptyBlobsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PipelineInput`<sup>Optional</sup> <a name="PipelineInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.pipelineInput"></a>

```go
func PipelineInput() interface{}
```

- *Type:* interface{}

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Activated`<sup>Required</sup> <a name="Activated" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.activated"></a>

```go
func Activated() interface{}
```

- *Type:* interface{}

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.additionalProperties"></a>

```go
func AdditionalProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.annotations"></a>

```go
func Annotations() *[]*string
```

- *Type:* *[]*string

---

##### `BlobPathBeginsWith`<sup>Required</sup> <a name="BlobPathBeginsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.blobPathBeginsWith"></a>

```go
func BlobPathBeginsWith() *string
```

- *Type:* *string

---

##### `BlobPathEndsWith`<sup>Required</sup> <a name="BlobPathEndsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.blobPathEndsWith"></a>

```go
func BlobPathEndsWith() *string
```

- *Type:* *string

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.events"></a>

```go
func Events() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreEmptyBlobs`<sup>Required</sup> <a name="IgnoreEmptyBlobs" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.ignoreEmptyBlobs"></a>

```go
func IgnoreEmptyBlobs() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryTriggerBlobEventConfig <a name="DataFactoryTriggerBlobEventConfig" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorytriggerblobevent"

&datafactorytriggerblobevent.DataFactoryTriggerBlobEventConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataFactoryId: *string,
	Events: *[]*string,
	Name: *string,
	Pipeline: interface{},
	StorageAccountId: *string,
	Activated: interface{},
	AdditionalProperties: *map[string]*string,
	Annotations: *[]*string,
	BlobPathBeginsWith: *string,
	BlobPathEndsWith: *string,
	Description: *string,
	Id: *string,
	IgnoreEmptyBlobs: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#data_factory_id DataFactoryTriggerBlobEvent#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.events">Events</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#events DataFactoryTriggerBlobEvent#events}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#name DataFactoryTriggerBlobEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.pipeline">Pipeline</a></code> | <code>interface{}</code> | pipeline block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#storage_account_id DataFactoryTriggerBlobEvent#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.activated">Activated</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#activated DataFactoryTriggerBlobEvent#activated}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#additional_properties DataFactoryTriggerBlobEvent#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.annotations">Annotations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#annotations DataFactoryTriggerBlobEvent#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.blobPathBeginsWith">BlobPathBeginsWith</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#blob_path_begins_with DataFactoryTriggerBlobEvent#blob_path_begins_with}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.blobPathEndsWith">BlobPathEndsWith</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#blob_path_ends_with DataFactoryTriggerBlobEvent#blob_path_ends_with}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#description DataFactoryTriggerBlobEvent#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#id DataFactoryTriggerBlobEvent#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.ignoreEmptyBlobs">IgnoreEmptyBlobs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#ignore_empty_blobs DataFactoryTriggerBlobEvent#ignore_empty_blobs}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts">DataFactoryTriggerBlobEventTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#data_factory_id DataFactoryTriggerBlobEvent#data_factory_id}.

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.events"></a>

```go
Events *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#events DataFactoryTriggerBlobEvent#events}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#name DataFactoryTriggerBlobEvent#name}.

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.pipeline"></a>

```go
Pipeline interface{}
```

- *Type:* interface{}

pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#pipeline DataFactoryTriggerBlobEvent#pipeline}

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#storage_account_id DataFactoryTriggerBlobEvent#storage_account_id}.

---

##### `Activated`<sup>Optional</sup> <a name="Activated" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.activated"></a>

```go
Activated interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#activated DataFactoryTriggerBlobEvent#activated}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.additionalProperties"></a>

```go
AdditionalProperties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#additional_properties DataFactoryTriggerBlobEvent#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.annotations"></a>

```go
Annotations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#annotations DataFactoryTriggerBlobEvent#annotations}.

---

##### `BlobPathBeginsWith`<sup>Optional</sup> <a name="BlobPathBeginsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.blobPathBeginsWith"></a>

```go
BlobPathBeginsWith *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#blob_path_begins_with DataFactoryTriggerBlobEvent#blob_path_begins_with}.

---

##### `BlobPathEndsWith`<sup>Optional</sup> <a name="BlobPathEndsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.blobPathEndsWith"></a>

```go
BlobPathEndsWith *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#blob_path_ends_with DataFactoryTriggerBlobEvent#blob_path_ends_with}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#description DataFactoryTriggerBlobEvent#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#id DataFactoryTriggerBlobEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreEmptyBlobs`<sup>Optional</sup> <a name="IgnoreEmptyBlobs" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.ignoreEmptyBlobs"></a>

```go
IgnoreEmptyBlobs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#ignore_empty_blobs DataFactoryTriggerBlobEvent#ignore_empty_blobs}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.timeouts"></a>

```go
Timeouts DataFactoryTriggerBlobEventTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts">DataFactoryTriggerBlobEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#timeouts DataFactoryTriggerBlobEvent#timeouts}

---

### DataFactoryTriggerBlobEventPipeline <a name="DataFactoryTriggerBlobEventPipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorytriggerblobevent"

&datafactorytriggerblobevent.DataFactoryTriggerBlobEventPipeline {
	Name: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#name DataFactoryTriggerBlobEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#parameters DataFactoryTriggerBlobEvent#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#name DataFactoryTriggerBlobEvent#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#parameters DataFactoryTriggerBlobEvent#parameters}.

---

### DataFactoryTriggerBlobEventTimeouts <a name="DataFactoryTriggerBlobEventTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorytriggerblobevent"

&datafactorytriggerblobevent.DataFactoryTriggerBlobEventTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#create DataFactoryTriggerBlobEvent#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#delete DataFactoryTriggerBlobEvent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#read DataFactoryTriggerBlobEvent#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#update DataFactoryTriggerBlobEvent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#create DataFactoryTriggerBlobEvent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#delete DataFactoryTriggerBlobEvent#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#read DataFactoryTriggerBlobEvent#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/data_factory_trigger_blob_event#update DataFactoryTriggerBlobEvent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryTriggerBlobEventPipelineList <a name="DataFactoryTriggerBlobEventPipelineList" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorytriggerblobevent"

datafactorytriggerblobevent.NewDataFactoryTriggerBlobEventPipelineList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataFactoryTriggerBlobEventPipelineList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.get"></a>

```go
func Get(index *f64) DataFactoryTriggerBlobEventPipelineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryTriggerBlobEventPipelineOutputReference <a name="DataFactoryTriggerBlobEventPipelineOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorytriggerblobevent"

datafactorytriggerblobevent.NewDataFactoryTriggerBlobEventPipelineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataFactoryTriggerBlobEventPipelineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryTriggerBlobEventTimeoutsOutputReference <a name="DataFactoryTriggerBlobEventTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorytriggerblobevent"

datafactorytriggerblobevent.NewDataFactoryTriggerBlobEventTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryTriggerBlobEventTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



