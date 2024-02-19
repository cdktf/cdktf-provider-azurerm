# `streamAnalyticsJobSchedule` Submodule <a name="`streamAnalyticsJobSchedule` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsJobSchedule <a name="StreamAnalyticsJobSchedule" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule azurerm_stream_analytics_job_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjobschedule"

streamanalyticsjobschedule.NewStreamAnalyticsJobSchedule(scope Construct, id *string, config StreamAnalyticsJobScheduleConfig) StreamAnalyticsJobSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig">StreamAnalyticsJobScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig">StreamAnalyticsJobScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.putTimeouts"></a>

```go
func PutTimeouts(value StreamAnalyticsJobScheduleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeouts">StreamAnalyticsJobScheduleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.resetId"></a>

```go
func ResetId()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsJobSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjobschedule"

streamanalyticsjobschedule.StreamAnalyticsJobSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjobschedule"

streamanalyticsjobschedule.StreamAnalyticsJobSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjobschedule"

streamanalyticsjobschedule.StreamAnalyticsJobSchedule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjobschedule"

streamanalyticsjobschedule.StreamAnalyticsJobSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StreamAnalyticsJobSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StreamAnalyticsJobSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StreamAnalyticsJobSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsJobSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.lastOutputTime">LastOutputTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference">StreamAnalyticsJobScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.startModeInput">StartModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.streamAnalyticsJobIdInput">StreamAnalyticsJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.startMode">StartMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.streamAnalyticsJobId">StreamAnalyticsJobId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LastOutputTime`<sup>Required</sup> <a name="LastOutputTime" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.lastOutputTime"></a>

```go
func LastOutputTime() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.timeouts"></a>

```go
func Timeouts() StreamAnalyticsJobScheduleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference">StreamAnalyticsJobScheduleTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StartModeInput`<sup>Optional</sup> <a name="StartModeInput" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.startModeInput"></a>

```go
func StartModeInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `StreamAnalyticsJobIdInput`<sup>Optional</sup> <a name="StreamAnalyticsJobIdInput" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.streamAnalyticsJobIdInput"></a>

```go
func StreamAnalyticsJobIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StartMode`<sup>Required</sup> <a name="StartMode" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.startMode"></a>

```go
func StartMode() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `StreamAnalyticsJobId`<sup>Required</sup> <a name="StreamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.streamAnalyticsJobId"></a>

```go
func StreamAnalyticsJobId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsJobScheduleConfig <a name="StreamAnalyticsJobScheduleConfig" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjobschedule"

&streamanalyticsjobschedule.StreamAnalyticsJobScheduleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StartMode: *string,
	StreamAnalyticsJobId: *string,
	Id: *string,
	StartTime: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.startMode">StartMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#start_mode StreamAnalyticsJobSchedule#start_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.streamAnalyticsJobId">StreamAnalyticsJobId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#stream_analytics_job_id StreamAnalyticsJobSchedule#stream_analytics_job_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#id StreamAnalyticsJobSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#start_time StreamAnalyticsJobSchedule#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeouts">StreamAnalyticsJobScheduleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StartMode`<sup>Required</sup> <a name="StartMode" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.startMode"></a>

```go
StartMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#start_mode StreamAnalyticsJobSchedule#start_mode}.

---

##### `StreamAnalyticsJobId`<sup>Required</sup> <a name="StreamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.streamAnalyticsJobId"></a>

```go
StreamAnalyticsJobId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#stream_analytics_job_id StreamAnalyticsJobSchedule#stream_analytics_job_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#id StreamAnalyticsJobSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#start_time StreamAnalyticsJobSchedule#start_time}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleConfig.property.timeouts"></a>

```go
Timeouts StreamAnalyticsJobScheduleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeouts">StreamAnalyticsJobScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#timeouts StreamAnalyticsJobSchedule#timeouts}

---

### StreamAnalyticsJobScheduleTimeouts <a name="StreamAnalyticsJobScheduleTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjobschedule"

&streamanalyticsjobschedule.StreamAnalyticsJobScheduleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#create StreamAnalyticsJobSchedule#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#delete StreamAnalyticsJobSchedule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#read StreamAnalyticsJobSchedule#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#update StreamAnalyticsJobSchedule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#create StreamAnalyticsJobSchedule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#delete StreamAnalyticsJobSchedule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#read StreamAnalyticsJobSchedule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/stream_analytics_job_schedule#update StreamAnalyticsJobSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsJobScheduleTimeoutsOutputReference <a name="StreamAnalyticsJobScheduleTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjobschedule"

streamanalyticsjobschedule.NewStreamAnalyticsJobScheduleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamAnalyticsJobScheduleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsJobSchedule.StreamAnalyticsJobScheduleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



