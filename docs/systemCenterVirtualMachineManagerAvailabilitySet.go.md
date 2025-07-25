# `systemCenterVirtualMachineManagerAvailabilitySet` Submodule <a name="`systemCenterVirtualMachineManagerAvailabilitySet` Submodule" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemCenterVirtualMachineManagerAvailabilitySet <a name="SystemCenterVirtualMachineManagerAvailabilitySet" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set azurerm_system_center_virtual_machine_manager_availability_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/systemcentervirtualmachinemanageravailabilityset"

systemcentervirtualmachinemanageravailabilityset.NewSystemCenterVirtualMachineManagerAvailabilitySet(scope Construct, id *string, config SystemCenterVirtualMachineManagerAvailabilitySetConfig) SystemCenterVirtualMachineManagerAvailabilitySet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig">SystemCenterVirtualMachineManagerAvailabilitySetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig">SystemCenterVirtualMachineManagerAvailabilitySetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.putTimeouts"></a>

```go
func PutTimeouts(value SystemCenterVirtualMachineManagerAvailabilitySetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SystemCenterVirtualMachineManagerAvailabilitySet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/systemcentervirtualmachinemanageravailabilityset"

systemcentervirtualmachinemanageravailabilityset.SystemCenterVirtualMachineManagerAvailabilitySet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/systemcentervirtualmachinemanageravailabilityset"

systemcentervirtualmachinemanageravailabilityset.SystemCenterVirtualMachineManagerAvailabilitySet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/systemcentervirtualmachinemanageravailabilityset"

systemcentervirtualmachinemanageravailabilityset.SystemCenterVirtualMachineManagerAvailabilitySet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/systemcentervirtualmachinemanageravailabilityset"

systemcentervirtualmachinemanageravailabilityset.SystemCenterVirtualMachineManagerAvailabilitySet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SystemCenterVirtualMachineManagerAvailabilitySet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SystemCenterVirtualMachineManagerAvailabilitySet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SystemCenterVirtualMachineManagerAvailabilitySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SystemCenterVirtualMachineManagerAvailabilitySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference">SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.customLocationIdInput">CustomLocationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.systemCenterVirtualMachineManagerServerIdInput">SystemCenterVirtualMachineManagerServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.customLocationId">CustomLocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.systemCenterVirtualMachineManagerServerId">SystemCenterVirtualMachineManagerServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.timeouts"></a>

```go
func Timeouts() SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference">SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference</a>

---

##### `CustomLocationIdInput`<sup>Optional</sup> <a name="CustomLocationIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.customLocationIdInput"></a>

```go
func CustomLocationIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SystemCenterVirtualMachineManagerServerIdInput`<sup>Optional</sup> <a name="SystemCenterVirtualMachineManagerServerIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.systemCenterVirtualMachineManagerServerIdInput"></a>

```go
func SystemCenterVirtualMachineManagerServerIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.customLocationId"></a>

```go
func CustomLocationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SystemCenterVirtualMachineManagerServerId`<sup>Required</sup> <a name="SystemCenterVirtualMachineManagerServerId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.systemCenterVirtualMachineManagerServerId"></a>

```go
func SystemCenterVirtualMachineManagerServerId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SystemCenterVirtualMachineManagerAvailabilitySetConfig <a name="SystemCenterVirtualMachineManagerAvailabilitySetConfig" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/systemcentervirtualmachinemanageravailabilityset"

&systemcentervirtualmachinemanageravailabilityset.SystemCenterVirtualMachineManagerAvailabilitySetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CustomLocationId: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	SystemCenterVirtualMachineManagerServerId: *string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.customLocationId">CustomLocationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#custom_location_id SystemCenterVirtualMachineManagerAvailabilitySet#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#location SystemCenterVirtualMachineManagerAvailabilitySet#location}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#name SystemCenterVirtualMachineManagerAvailabilitySet#name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#resource_group_name SystemCenterVirtualMachineManagerAvailabilitySet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.systemCenterVirtualMachineManagerServerId">SystemCenterVirtualMachineManagerServerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#system_center_virtual_machine_manager_server_id SystemCenterVirtualMachineManagerAvailabilitySet#system_center_virtual_machine_manager_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#id SystemCenterVirtualMachineManagerAvailabilitySet#id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#tags SystemCenterVirtualMachineManagerAvailabilitySet#tags}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.customLocationId"></a>

```go
CustomLocationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#custom_location_id SystemCenterVirtualMachineManagerAvailabilitySet#custom_location_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#location SystemCenterVirtualMachineManagerAvailabilitySet#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#name SystemCenterVirtualMachineManagerAvailabilitySet#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#resource_group_name SystemCenterVirtualMachineManagerAvailabilitySet#resource_group_name}.

---

##### `SystemCenterVirtualMachineManagerServerId`<sup>Required</sup> <a name="SystemCenterVirtualMachineManagerServerId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.systemCenterVirtualMachineManagerServerId"></a>

```go
SystemCenterVirtualMachineManagerServerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#system_center_virtual_machine_manager_server_id SystemCenterVirtualMachineManagerAvailabilitySet#system_center_virtual_machine_manager_server_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#id SystemCenterVirtualMachineManagerAvailabilitySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#tags SystemCenterVirtualMachineManagerAvailabilitySet#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetConfig.property.timeouts"></a>

```go
Timeouts SystemCenterVirtualMachineManagerAvailabilitySetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts">SystemCenterVirtualMachineManagerAvailabilitySetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#timeouts SystemCenterVirtualMachineManagerAvailabilitySet#timeouts}

---

### SystemCenterVirtualMachineManagerAvailabilitySetTimeouts <a name="SystemCenterVirtualMachineManagerAvailabilitySetTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/systemcentervirtualmachinemanageravailabilityset"

&systemcentervirtualmachinemanageravailabilityset.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#create SystemCenterVirtualMachineManagerAvailabilitySet#create}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#delete SystemCenterVirtualMachineManagerAvailabilitySet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#read SystemCenterVirtualMachineManagerAvailabilitySet#read}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#update SystemCenterVirtualMachineManagerAvailabilitySet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#create SystemCenterVirtualMachineManagerAvailabilitySet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#delete SystemCenterVirtualMachineManagerAvailabilitySet#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#read SystemCenterVirtualMachineManagerAvailabilitySet#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/system_center_virtual_machine_manager_availability_set#update SystemCenterVirtualMachineManagerAvailabilitySet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference <a name="SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/systemcentervirtualmachinemanageravailabilityset"

systemcentervirtualmachinemanageravailabilityset.NewSystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerAvailabilitySet.SystemCenterVirtualMachineManagerAvailabilitySetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



