# `dynatraceMonitor` Submodule <a name="`dynatraceMonitor` Submodule" id="@cdktf/provider-azurerm.dynatraceMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynatraceMonitor <a name="DynatraceMonitor" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor azurerm_dynatrace_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dynatracemonitor"

dynatracemonitor.NewDynatraceMonitor(scope Construct, id *string, config DynatraceMonitorConfig) DynatraceMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig">DynatraceMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig">DynatraceMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putPlan">PutPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putUser">PutUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetMonitoringEnabled">ResetMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putIdentity"></a>

```go
func PutIdentity(value DynatraceMonitorIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a>

---

##### `PutPlan` <a name="PutPlan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putPlan"></a>

```go
func PutPlan(value DynatraceMonitorPlan)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putTimeouts"></a>

```go
func PutTimeouts(value DynatraceMonitorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a>

---

##### `PutUser` <a name="PutUser" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putUser"></a>

```go
func PutUser(value DynatraceMonitorUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.putUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetId"></a>

```go
func ResetId()
```

##### `ResetMonitoringEnabled` <a name="ResetMonitoringEnabled" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetMonitoringEnabled"></a>

```go
func ResetMonitoringEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DynatraceMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dynatracemonitor"

dynatracemonitor.DynatraceMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dynatracemonitor"

dynatracemonitor.DynatraceMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dynatracemonitor"

dynatracemonitor.DynatraceMonitor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dynatracemonitor"

dynatracemonitor.DynatraceMonitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DynatraceMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DynatraceMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DynatraceMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DynatraceMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference">DynatraceMonitorIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference">DynatraceMonitorPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference">DynatraceMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.user">User</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference">DynatraceMonitorUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.marketplaceSubscriptionInput">MarketplaceSubscriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.monitoringEnabledInput">MonitoringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.planInput">PlanInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.userInput">UserInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.marketplaceSubscription">MarketplaceSubscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.monitoringEnabled">MonitoringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.identity"></a>

```go
func Identity() DynatraceMonitorIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference">DynatraceMonitorIdentityOutputReference</a>

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.plan"></a>

```go
func Plan() DynatraceMonitorPlanOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference">DynatraceMonitorPlanOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.timeouts"></a>

```go
func Timeouts() DynatraceMonitorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference">DynatraceMonitorTimeoutsOutputReference</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.user"></a>

```go
func User() DynatraceMonitorUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference">DynatraceMonitorUserOutputReference</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.identityInput"></a>

```go
func IdentityInput() DynatraceMonitorIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MarketplaceSubscriptionInput`<sup>Optional</sup> <a name="MarketplaceSubscriptionInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.marketplaceSubscriptionInput"></a>

```go
func MarketplaceSubscriptionInput() *string
```

- *Type:* *string

---

##### `MonitoringEnabledInput`<sup>Optional</sup> <a name="MonitoringEnabledInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.monitoringEnabledInput"></a>

```go
func MonitoringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.planInput"></a>

```go
func PlanInput() DynatraceMonitorPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.userInput"></a>

```go
func UserInput() DynatraceMonitorUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MarketplaceSubscription`<sup>Required</sup> <a name="MarketplaceSubscription" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.marketplaceSubscription"></a>

```go
func MarketplaceSubscription() *string
```

- *Type:* *string

---

##### `MonitoringEnabled`<sup>Required</sup> <a name="MonitoringEnabled" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.monitoringEnabled"></a>

```go
func MonitoringEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DynatraceMonitorConfig <a name="DynatraceMonitorConfig" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dynatracemonitor"

&dynatracemonitor.DynatraceMonitorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.dynatraceMonitor.DynatraceMonitorIdentity,
	Location: *string,
	MarketplaceSubscription: *string,
	Name: *string,
	Plan: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.dynatraceMonitor.DynatraceMonitorPlan,
	ResourceGroupName: *string,
	User: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.dynatraceMonitor.DynatraceMonitorUser,
	Id: *string,
	MonitoringEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.dynatraceMonitor.DynatraceMonitorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#location DynatraceMonitor#location}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.marketplaceSubscription">MarketplaceSubscription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#marketplace_subscription DynatraceMonitor#marketplace_subscription}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#name DynatraceMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#resource_group_name DynatraceMonitor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.user">User</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a></code> | user block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#id DynatraceMonitor#id}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.monitoringEnabled">MonitoringEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#monitoring_enabled DynatraceMonitor#monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#tags DynatraceMonitor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.identity"></a>

```go
Identity DynatraceMonitorIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#identity DynatraceMonitor#identity}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#location DynatraceMonitor#location}.

---

##### `MarketplaceSubscription`<sup>Required</sup> <a name="MarketplaceSubscription" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.marketplaceSubscription"></a>

```go
MarketplaceSubscription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#marketplace_subscription DynatraceMonitor#marketplace_subscription}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#name DynatraceMonitor#name}.

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.plan"></a>

```go
Plan DynatraceMonitorPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#plan DynatraceMonitor#plan}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#resource_group_name DynatraceMonitor#resource_group_name}.

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.user"></a>

```go
User DynatraceMonitorUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#user DynatraceMonitor#user}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#id DynatraceMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MonitoringEnabled`<sup>Optional</sup> <a name="MonitoringEnabled" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.monitoringEnabled"></a>

```go
MonitoringEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#monitoring_enabled DynatraceMonitor#monitoring_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#tags DynatraceMonitor#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorConfig.property.timeouts"></a>

```go
Timeouts DynatraceMonitorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts">DynatraceMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#timeouts DynatraceMonitor#timeouts}

---

### DynatraceMonitorIdentity <a name="DynatraceMonitorIdentity" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dynatracemonitor"

&dynatracemonitor.DynatraceMonitorIdentity {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#type DynatraceMonitor#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#type DynatraceMonitor#type}.

---

### DynatraceMonitorPlan <a name="DynatraceMonitorPlan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dynatracemonitor"

&dynatracemonitor.DynatraceMonitorPlan {
	Plan: *string,
	BillingCycle: *string,
	UsageType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.plan">Plan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#plan DynatraceMonitor#plan}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.billingCycle">BillingCycle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#billing_cycle DynatraceMonitor#billing_cycle}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.usageType">UsageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#usage_type DynatraceMonitor#usage_type}. |

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.plan"></a>

```go
Plan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#plan DynatraceMonitor#plan}.

---

##### `BillingCycle`<sup>Optional</sup> <a name="BillingCycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.billingCycle"></a>

```go
BillingCycle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#billing_cycle DynatraceMonitor#billing_cycle}.

---

##### `UsageType`<sup>Optional</sup> <a name="UsageType" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan.property.usageType"></a>

```go
UsageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#usage_type DynatraceMonitor#usage_type}.

---

### DynatraceMonitorTimeouts <a name="DynatraceMonitorTimeouts" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dynatracemonitor"

&dynatracemonitor.DynatraceMonitorTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#create DynatraceMonitor#create}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#delete DynatraceMonitor#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#read DynatraceMonitor#read}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#update DynatraceMonitor#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#create DynatraceMonitor#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#delete DynatraceMonitor#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#read DynatraceMonitor#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#update DynatraceMonitor#update}.

---

### DynatraceMonitorUser <a name="DynatraceMonitorUser" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dynatracemonitor"

&dynatracemonitor.DynatraceMonitorUser {
	Country: *string,
	Email: *string,
	FirstName: *string,
	LastName: *string,
	PhoneNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.country">Country</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#country DynatraceMonitor#country}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#email DynatraceMonitor#email}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#first_name DynatraceMonitor#first_name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#last_name DynatraceMonitor#last_name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#phone_number DynatraceMonitor#phone_number}. |

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.country"></a>

```go
Country *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#country DynatraceMonitor#country}.

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#email DynatraceMonitor#email}.

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#first_name DynatraceMonitor#first_name}.

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#last_name DynatraceMonitor#last_name}.

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/dynatrace_monitor#phone_number DynatraceMonitor#phone_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynatraceMonitorIdentityOutputReference <a name="DynatraceMonitorIdentityOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dynatracemonitor"

dynatracemonitor.NewDynatraceMonitorIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynatraceMonitorIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DynatraceMonitorIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorIdentity">DynatraceMonitorIdentity</a>

---


### DynatraceMonitorPlanOutputReference <a name="DynatraceMonitorPlanOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dynatracemonitor"

dynatracemonitor.NewDynatraceMonitorPlanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynatraceMonitorPlanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resetBillingCycle">ResetBillingCycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resetUsageType">ResetUsageType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBillingCycle` <a name="ResetBillingCycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resetBillingCycle"></a>

```go
func ResetBillingCycle()
```

##### `ResetUsageType` <a name="ResetUsageType" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.resetUsageType"></a>

```go
func ResetUsageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.effectiveDate">EffectiveDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.billingCycleInput">BillingCycleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.planInput">PlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.usageTypeInput">UsageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.billingCycle">BillingCycle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.usageType">UsageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveDate`<sup>Required</sup> <a name="EffectiveDate" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.effectiveDate"></a>

```go
func EffectiveDate() *string
```

- *Type:* *string

---

##### `BillingCycleInput`<sup>Optional</sup> <a name="BillingCycleInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.billingCycleInput"></a>

```go
func BillingCycleInput() *string
```

- *Type:* *string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.planInput"></a>

```go
func PlanInput() *string
```

- *Type:* *string

---

##### `UsageTypeInput`<sup>Optional</sup> <a name="UsageTypeInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.usageTypeInput"></a>

```go
func UsageTypeInput() *string
```

- *Type:* *string

---

##### `BillingCycle`<sup>Required</sup> <a name="BillingCycle" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.billingCycle"></a>

```go
func BillingCycle() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `UsageType`<sup>Required</sup> <a name="UsageType" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.usageType"></a>

```go
func UsageType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlanOutputReference.property.internalValue"></a>

```go
func InternalValue() DynatraceMonitorPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorPlan">DynatraceMonitorPlan</a>

---


### DynatraceMonitorTimeoutsOutputReference <a name="DynatraceMonitorTimeoutsOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dynatracemonitor"

dynatracemonitor.NewDynatraceMonitorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynatraceMonitorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynatraceMonitorUserOutputReference <a name="DynatraceMonitorUserOutputReference" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dynatracemonitor"

dynatracemonitor.NewDynatraceMonitorUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynatraceMonitorUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUserOutputReference.property.internalValue"></a>

```go
func InternalValue() DynatraceMonitorUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceMonitor.DynatraceMonitorUser">DynatraceMonitorUser</a>

---



