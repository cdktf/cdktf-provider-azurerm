# `mssqlManagedInstanceStartStopSchedule` Submodule <a name="`mssqlManagedInstanceStartStopSchedule` Submodule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedInstanceStartStopSchedule <a name="MssqlManagedInstanceStartStopSchedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule azurerm_mssql_managed_instance_start_stop_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mssqlmanagedinstancestartstopschedule"

mssqlmanagedinstancestartstopschedule.NewMssqlManagedInstanceStartStopSchedule(scope Construct, id *string, config MssqlManagedInstanceStartStopScheduleConfig) MssqlManagedInstanceStartStopSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig">MssqlManagedInstanceStartStopScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig">MssqlManagedInstanceStartStopScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetTimezoneId">ResetTimezoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putSchedule"></a>

```go
func PutSchedule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putSchedule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putTimeouts"></a>

```go
func PutTimeouts(value MssqlManagedInstanceStartStopScheduleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimezoneId` <a name="ResetTimezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetTimezoneId"></a>

```go
func ResetTimezoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlManagedInstanceStartStopSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mssqlmanagedinstancestartstopschedule"

mssqlmanagedinstancestartstopschedule.MssqlManagedInstanceStartStopSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mssqlmanagedinstancestartstopschedule"

mssqlmanagedinstancestartstopschedule.MssqlManagedInstanceStartStopSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mssqlmanagedinstancestartstopschedule"

mssqlmanagedinstancestartstopschedule.MssqlManagedInstanceStartStopSchedule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mssqlmanagedinstancestartstopschedule"

mssqlmanagedinstancestartstopschedule.MssqlManagedInstanceStartStopSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MssqlManagedInstanceStartStopSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MssqlManagedInstanceStartStopSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MssqlManagedInstanceStartStopSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MssqlManagedInstanceStartStopSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.nextExecutionTime">NextExecutionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.nextRunAction">NextRunAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList">MssqlManagedInstanceStartStopScheduleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference">MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timezoneIdInput">TimezoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NextExecutionTime`<sup>Required</sup> <a name="NextExecutionTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.nextExecutionTime"></a>

```go
func NextExecutionTime() *string
```

- *Type:* *string

---

##### `NextRunAction`<sup>Required</sup> <a name="NextRunAction" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.nextRunAction"></a>

```go
func NextRunAction() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.schedule"></a>

```go
func Schedule() MssqlManagedInstanceStartStopScheduleScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList">MssqlManagedInstanceStartStopScheduleScheduleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timeouts"></a>

```go
func Timeouts() MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference">MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.managedInstanceIdInput"></a>

```go
func ManagedInstanceIdInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimezoneIdInput`<sup>Optional</sup> <a name="TimezoneIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timezoneIdInput"></a>

```go
func TimezoneIdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timezoneId"></a>

```go
func TimezoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedInstanceStartStopScheduleConfig <a name="MssqlManagedInstanceStartStopScheduleConfig" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mssqlmanagedinstancestartstopschedule"

&mssqlmanagedinstancestartstopschedule.MssqlManagedInstanceStartStopScheduleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedInstanceId: *string,
	Schedule: interface{},
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts,
	TimezoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#managed_instance_id MssqlManagedInstanceStartStopSchedule#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.schedule">Schedule</a></code> | <code>interface{}</code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#description MssqlManagedInstanceStartStopSchedule#description}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#id MssqlManagedInstanceStartStopSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#timezone_id MssqlManagedInstanceStartStopSchedule#timezone_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.managedInstanceId"></a>

```go
ManagedInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#managed_instance_id MssqlManagedInstanceStartStopSchedule#managed_instance_id}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.schedule"></a>

```go
Schedule interface{}
```

- *Type:* interface{}

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#schedule MssqlManagedInstanceStartStopSchedule#schedule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#description MssqlManagedInstanceStartStopSchedule#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#id MssqlManagedInstanceStartStopSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.timeouts"></a>

```go
Timeouts MssqlManagedInstanceStartStopScheduleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#timeouts MssqlManagedInstanceStartStopSchedule#timeouts}

---

##### `TimezoneId`<sup>Optional</sup> <a name="TimezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.timezoneId"></a>

```go
TimezoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#timezone_id MssqlManagedInstanceStartStopSchedule#timezone_id}.

---

### MssqlManagedInstanceStartStopScheduleSchedule <a name="MssqlManagedInstanceStartStopScheduleSchedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mssqlmanagedinstancestartstopschedule"

&mssqlmanagedinstancestartstopschedule.MssqlManagedInstanceStartStopScheduleSchedule {
	StartDay: *string,
	StartTime: *string,
	StopDay: *string,
	StopTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.startDay">StartDay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#start_day MssqlManagedInstanceStartStopSchedule#start_day}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#start_time MssqlManagedInstanceStartStopSchedule#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.stopDay">StopDay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#stop_day MssqlManagedInstanceStartStopSchedule#stop_day}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.stopTime">StopTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#stop_time MssqlManagedInstanceStartStopSchedule#stop_time}. |

---

##### `StartDay`<sup>Required</sup> <a name="StartDay" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.startDay"></a>

```go
StartDay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#start_day MssqlManagedInstanceStartStopSchedule#start_day}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#start_time MssqlManagedInstanceStartStopSchedule#start_time}.

---

##### `StopDay`<sup>Required</sup> <a name="StopDay" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.stopDay"></a>

```go
StopDay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#stop_day MssqlManagedInstanceStartStopSchedule#stop_day}.

---

##### `StopTime`<sup>Required</sup> <a name="StopTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.stopTime"></a>

```go
StopTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#stop_time MssqlManagedInstanceStartStopSchedule#stop_time}.

---

### MssqlManagedInstanceStartStopScheduleTimeouts <a name="MssqlManagedInstanceStartStopScheduleTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mssqlmanagedinstancestartstopschedule"

&mssqlmanagedinstancestartstopschedule.MssqlManagedInstanceStartStopScheduleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#create MssqlManagedInstanceStartStopSchedule#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#delete MssqlManagedInstanceStartStopSchedule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#read MssqlManagedInstanceStartStopSchedule#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#update MssqlManagedInstanceStartStopSchedule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#create MssqlManagedInstanceStartStopSchedule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#delete MssqlManagedInstanceStartStopSchedule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#read MssqlManagedInstanceStartStopSchedule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/mssql_managed_instance_start_stop_schedule#update MssqlManagedInstanceStartStopSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedInstanceStartStopScheduleScheduleList <a name="MssqlManagedInstanceStartStopScheduleScheduleList" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mssqlmanagedinstancestartstopschedule"

mssqlmanagedinstancestartstopschedule.NewMssqlManagedInstanceStartStopScheduleScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MssqlManagedInstanceStartStopScheduleScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.get"></a>

```go
func Get(index *f64) MssqlManagedInstanceStartStopScheduleScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MssqlManagedInstanceStartStopScheduleScheduleOutputReference <a name="MssqlManagedInstanceStartStopScheduleScheduleOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mssqlmanagedinstancestartstopschedule"

mssqlmanagedinstancestartstopschedule.NewMssqlManagedInstanceStartStopScheduleScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MssqlManagedInstanceStartStopScheduleScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startDayInput">StartDayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopDayInput">StopDayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopTimeInput">StopTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startDay">StartDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopDay">StopDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopTime">StopTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartDayInput`<sup>Optional</sup> <a name="StartDayInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startDayInput"></a>

```go
func StartDayInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `StopDayInput`<sup>Optional</sup> <a name="StopDayInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopDayInput"></a>

```go
func StopDayInput() *string
```

- *Type:* *string

---

##### `StopTimeInput`<sup>Optional</sup> <a name="StopTimeInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopTimeInput"></a>

```go
func StopTimeInput() *string
```

- *Type:* *string

---

##### `StartDay`<sup>Required</sup> <a name="StartDay" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startDay"></a>

```go
func StartDay() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `StopDay`<sup>Required</sup> <a name="StopDay" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopDay"></a>

```go
func StopDay() *string
```

- *Type:* *string

---

##### `StopTime`<sup>Required</sup> <a name="StopTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopTime"></a>

```go
func StopTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference <a name="MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/mssqlmanagedinstancestartstopschedule"

mssqlmanagedinstancestartstopschedule.NewMssqlManagedInstanceStartStopScheduleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



