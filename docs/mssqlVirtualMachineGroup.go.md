# `mssqlVirtualMachineGroup` Submodule <a name="`mssqlVirtualMachineGroup` Submodule" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlVirtualMachineGroup <a name="MssqlVirtualMachineGroup" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group azurerm_mssql_virtual_machine_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachinegroup"

mssqlvirtualmachinegroup.NewMssqlVirtualMachineGroup(scope Construct, id *string, config MssqlVirtualMachineGroupConfig) MssqlVirtualMachineGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig">MssqlVirtualMachineGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig">MssqlVirtualMachineGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile">PutWsfcDomainProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putTimeouts"></a>

```go
func PutTimeouts(value MssqlVirtualMachineGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>

---

##### `PutWsfcDomainProfile` <a name="PutWsfcDomainProfile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile"></a>

```go
func PutWsfcDomainProfile(value MssqlVirtualMachineGroupWsfcDomainProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlVirtualMachineGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachinegroup"

mssqlvirtualmachinegroup.MssqlVirtualMachineGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachinegroup"

mssqlvirtualmachinegroup.MssqlVirtualMachineGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachinegroup"

mssqlvirtualmachinegroup.MssqlVirtualMachineGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachinegroup"

mssqlvirtualmachinegroup.MssqlVirtualMachineGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MssqlVirtualMachineGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MssqlVirtualMachineGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MssqlVirtualMachineGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MssqlVirtualMachineGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference">MssqlVirtualMachineGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.wsfcDomainProfile">WsfcDomainProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference">MssqlVirtualMachineGroupWsfcDomainProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageOfferInput">SqlImageOfferInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageSkuInput">SqlImageSkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.wsfcDomainProfileInput">WsfcDomainProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageOffer">SqlImageOffer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageSku">SqlImageSku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.timeouts"></a>

```go
func Timeouts() MssqlVirtualMachineGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference">MssqlVirtualMachineGroupTimeoutsOutputReference</a>

---

##### `WsfcDomainProfile`<sup>Required</sup> <a name="WsfcDomainProfile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.wsfcDomainProfile"></a>

```go
func WsfcDomainProfile() MssqlVirtualMachineGroupWsfcDomainProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference">MssqlVirtualMachineGroupWsfcDomainProfileOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SqlImageOfferInput`<sup>Optional</sup> <a name="SqlImageOfferInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageOfferInput"></a>

```go
func SqlImageOfferInput() *string
```

- *Type:* *string

---

##### `SqlImageSkuInput`<sup>Optional</sup> <a name="SqlImageSkuInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageSkuInput"></a>

```go
func SqlImageSkuInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WsfcDomainProfileInput`<sup>Optional</sup> <a name="WsfcDomainProfileInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.wsfcDomainProfileInput"></a>

```go
func WsfcDomainProfileInput() MssqlVirtualMachineGroupWsfcDomainProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SqlImageOffer`<sup>Required</sup> <a name="SqlImageOffer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageOffer"></a>

```go
func SqlImageOffer() *string
```

- *Type:* *string

---

##### `SqlImageSku`<sup>Required</sup> <a name="SqlImageSku" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageSku"></a>

```go
func SqlImageSku() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlVirtualMachineGroupConfig <a name="MssqlVirtualMachineGroupConfig" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachinegroup"

&mssqlvirtualmachinegroup.MssqlVirtualMachineGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	SqlImageOffer: *string,
	SqlImageSku: *string,
	WsfcDomainProfile: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#location MssqlVirtualMachineGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#name MssqlVirtualMachineGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#resource_group_name MssqlVirtualMachineGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.sqlImageOffer">SqlImageOffer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#sql_image_offer MssqlVirtualMachineGroup#sql_image_offer}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.sqlImageSku">SqlImageSku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#sql_image_sku MssqlVirtualMachineGroup#sql_image_sku}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.wsfcDomainProfile">WsfcDomainProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a></code> | wsfc_domain_profile block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#id MssqlVirtualMachineGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#tags MssqlVirtualMachineGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#location MssqlVirtualMachineGroup#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#name MssqlVirtualMachineGroup#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#resource_group_name MssqlVirtualMachineGroup#resource_group_name}.

---

##### `SqlImageOffer`<sup>Required</sup> <a name="SqlImageOffer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.sqlImageOffer"></a>

```go
SqlImageOffer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#sql_image_offer MssqlVirtualMachineGroup#sql_image_offer}.

---

##### `SqlImageSku`<sup>Required</sup> <a name="SqlImageSku" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.sqlImageSku"></a>

```go
SqlImageSku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#sql_image_sku MssqlVirtualMachineGroup#sql_image_sku}.

---

##### `WsfcDomainProfile`<sup>Required</sup> <a name="WsfcDomainProfile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.wsfcDomainProfile"></a>

```go
WsfcDomainProfile MssqlVirtualMachineGroupWsfcDomainProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

wsfc_domain_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#wsfc_domain_profile MssqlVirtualMachineGroup#wsfc_domain_profile}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#id MssqlVirtualMachineGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#tags MssqlVirtualMachineGroup#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.timeouts"></a>

```go
Timeouts MssqlVirtualMachineGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#timeouts MssqlVirtualMachineGroup#timeouts}

---

### MssqlVirtualMachineGroupTimeouts <a name="MssqlVirtualMachineGroupTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachinegroup"

&mssqlvirtualmachinegroup.MssqlVirtualMachineGroupTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#create MssqlVirtualMachineGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#delete MssqlVirtualMachineGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#read MssqlVirtualMachineGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#update MssqlVirtualMachineGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#create MssqlVirtualMachineGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#delete MssqlVirtualMachineGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#read MssqlVirtualMachineGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#update MssqlVirtualMachineGroup#update}.

---

### MssqlVirtualMachineGroupWsfcDomainProfile <a name="MssqlVirtualMachineGroupWsfcDomainProfile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachinegroup"

&mssqlvirtualmachinegroup.MssqlVirtualMachineGroupWsfcDomainProfile {
	ClusterSubnetType: *string,
	Fqdn: *string,
	ClusterBootstrapAccountName: *string,
	ClusterOperatorAccountName: *string,
	OrganizationalUnitPath: *string,
	SqlServiceAccountName: *string,
	StorageAccountPrimaryKey: *string,
	StorageAccountUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterSubnetType">ClusterSubnetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#cluster_subnet_type MssqlVirtualMachineGroup#cluster_subnet_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.fqdn">Fqdn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#fqdn MssqlVirtualMachineGroup#fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterBootstrapAccountName">ClusterBootstrapAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#cluster_bootstrap_account_name MssqlVirtualMachineGroup#cluster_bootstrap_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterOperatorAccountName">ClusterOperatorAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#cluster_operator_account_name MssqlVirtualMachineGroup#cluster_operator_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.organizationalUnitPath">OrganizationalUnitPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#organizational_unit_path MssqlVirtualMachineGroup#organizational_unit_path}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.sqlServiceAccountName">SqlServiceAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#sql_service_account_name MssqlVirtualMachineGroup#sql_service_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.storageAccountPrimaryKey">StorageAccountPrimaryKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#storage_account_primary_key MssqlVirtualMachineGroup#storage_account_primary_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.storageAccountUrl">StorageAccountUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#storage_account_url MssqlVirtualMachineGroup#storage_account_url}. |

---

##### `ClusterSubnetType`<sup>Required</sup> <a name="ClusterSubnetType" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterSubnetType"></a>

```go
ClusterSubnetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#cluster_subnet_type MssqlVirtualMachineGroup#cluster_subnet_type}.

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.fqdn"></a>

```go
Fqdn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#fqdn MssqlVirtualMachineGroup#fqdn}.

---

##### `ClusterBootstrapAccountName`<sup>Optional</sup> <a name="ClusterBootstrapAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterBootstrapAccountName"></a>

```go
ClusterBootstrapAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#cluster_bootstrap_account_name MssqlVirtualMachineGroup#cluster_bootstrap_account_name}.

---

##### `ClusterOperatorAccountName`<sup>Optional</sup> <a name="ClusterOperatorAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterOperatorAccountName"></a>

```go
ClusterOperatorAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#cluster_operator_account_name MssqlVirtualMachineGroup#cluster_operator_account_name}.

---

##### `OrganizationalUnitPath`<sup>Optional</sup> <a name="OrganizationalUnitPath" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.organizationalUnitPath"></a>

```go
OrganizationalUnitPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#organizational_unit_path MssqlVirtualMachineGroup#organizational_unit_path}.

---

##### `SqlServiceAccountName`<sup>Optional</sup> <a name="SqlServiceAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.sqlServiceAccountName"></a>

```go
SqlServiceAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#sql_service_account_name MssqlVirtualMachineGroup#sql_service_account_name}.

---

##### `StorageAccountPrimaryKey`<sup>Optional</sup> <a name="StorageAccountPrimaryKey" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.storageAccountPrimaryKey"></a>

```go
StorageAccountPrimaryKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#storage_account_primary_key MssqlVirtualMachineGroup#storage_account_primary_key}.

---

##### `StorageAccountUrl`<sup>Optional</sup> <a name="StorageAccountUrl" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.storageAccountUrl"></a>

```go
StorageAccountUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/mssql_virtual_machine_group#storage_account_url MssqlVirtualMachineGroup#storage_account_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlVirtualMachineGroupTimeoutsOutputReference <a name="MssqlVirtualMachineGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachinegroup"

mssqlvirtualmachinegroup.NewMssqlVirtualMachineGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlVirtualMachineGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MssqlVirtualMachineGroupWsfcDomainProfileOutputReference <a name="MssqlVirtualMachineGroupWsfcDomainProfileOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachinegroup"

mssqlvirtualmachinegroup.NewMssqlVirtualMachineGroupWsfcDomainProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlVirtualMachineGroupWsfcDomainProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetClusterBootstrapAccountName">ResetClusterBootstrapAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetClusterOperatorAccountName">ResetClusterOperatorAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetOrganizationalUnitPath">ResetOrganizationalUnitPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetSqlServiceAccountName">ResetSqlServiceAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetStorageAccountPrimaryKey">ResetStorageAccountPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetStorageAccountUrl">ResetStorageAccountUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterBootstrapAccountName` <a name="ResetClusterBootstrapAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetClusterBootstrapAccountName"></a>

```go
func ResetClusterBootstrapAccountName()
```

##### `ResetClusterOperatorAccountName` <a name="ResetClusterOperatorAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetClusterOperatorAccountName"></a>

```go
func ResetClusterOperatorAccountName()
```

##### `ResetOrganizationalUnitPath` <a name="ResetOrganizationalUnitPath" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetOrganizationalUnitPath"></a>

```go
func ResetOrganizationalUnitPath()
```

##### `ResetSqlServiceAccountName` <a name="ResetSqlServiceAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetSqlServiceAccountName"></a>

```go
func ResetSqlServiceAccountName()
```

##### `ResetStorageAccountPrimaryKey` <a name="ResetStorageAccountPrimaryKey" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetStorageAccountPrimaryKey"></a>

```go
func ResetStorageAccountPrimaryKey()
```

##### `ResetStorageAccountUrl` <a name="ResetStorageAccountUrl" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetStorageAccountUrl"></a>

```go
func ResetStorageAccountUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterBootstrapAccountNameInput">ClusterBootstrapAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterOperatorAccountNameInput">ClusterOperatorAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterSubnetTypeInput">ClusterSubnetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.organizationalUnitPathInput">OrganizationalUnitPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.sqlServiceAccountNameInput">SqlServiceAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountPrimaryKeyInput">StorageAccountPrimaryKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountUrlInput">StorageAccountUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterBootstrapAccountName">ClusterBootstrapAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterOperatorAccountName">ClusterOperatorAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterSubnetType">ClusterSubnetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.organizationalUnitPath">OrganizationalUnitPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.sqlServiceAccountName">SqlServiceAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountPrimaryKey">StorageAccountPrimaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountUrl">StorageAccountUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterBootstrapAccountNameInput`<sup>Optional</sup> <a name="ClusterBootstrapAccountNameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterBootstrapAccountNameInput"></a>

```go
func ClusterBootstrapAccountNameInput() *string
```

- *Type:* *string

---

##### `ClusterOperatorAccountNameInput`<sup>Optional</sup> <a name="ClusterOperatorAccountNameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterOperatorAccountNameInput"></a>

```go
func ClusterOperatorAccountNameInput() *string
```

- *Type:* *string

---

##### `ClusterSubnetTypeInput`<sup>Optional</sup> <a name="ClusterSubnetTypeInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterSubnetTypeInput"></a>

```go
func ClusterSubnetTypeInput() *string
```

- *Type:* *string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqdnInput"></a>

```go
func FqdnInput() *string
```

- *Type:* *string

---

##### `OrganizationalUnitPathInput`<sup>Optional</sup> <a name="OrganizationalUnitPathInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.organizationalUnitPathInput"></a>

```go
func OrganizationalUnitPathInput() *string
```

- *Type:* *string

---

##### `SqlServiceAccountNameInput`<sup>Optional</sup> <a name="SqlServiceAccountNameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.sqlServiceAccountNameInput"></a>

```go
func SqlServiceAccountNameInput() *string
```

- *Type:* *string

---

##### `StorageAccountPrimaryKeyInput`<sup>Optional</sup> <a name="StorageAccountPrimaryKeyInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountPrimaryKeyInput"></a>

```go
func StorageAccountPrimaryKeyInput() *string
```

- *Type:* *string

---

##### `StorageAccountUrlInput`<sup>Optional</sup> <a name="StorageAccountUrlInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountUrlInput"></a>

```go
func StorageAccountUrlInput() *string
```

- *Type:* *string

---

##### `ClusterBootstrapAccountName`<sup>Required</sup> <a name="ClusterBootstrapAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterBootstrapAccountName"></a>

```go
func ClusterBootstrapAccountName() *string
```

- *Type:* *string

---

##### `ClusterOperatorAccountName`<sup>Required</sup> <a name="ClusterOperatorAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterOperatorAccountName"></a>

```go
func ClusterOperatorAccountName() *string
```

- *Type:* *string

---

##### `ClusterSubnetType`<sup>Required</sup> <a name="ClusterSubnetType" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterSubnetType"></a>

```go
func ClusterSubnetType() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `OrganizationalUnitPath`<sup>Required</sup> <a name="OrganizationalUnitPath" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.organizationalUnitPath"></a>

```go
func OrganizationalUnitPath() *string
```

- *Type:* *string

---

##### `SqlServiceAccountName`<sup>Required</sup> <a name="SqlServiceAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.sqlServiceAccountName"></a>

```go
func SqlServiceAccountName() *string
```

- *Type:* *string

---

##### `StorageAccountPrimaryKey`<sup>Required</sup> <a name="StorageAccountPrimaryKey" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountPrimaryKey"></a>

```go
func StorageAccountPrimaryKey() *string
```

- *Type:* *string

---

##### `StorageAccountUrl`<sup>Required</sup> <a name="StorageAccountUrl" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountUrl"></a>

```go
func StorageAccountUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlVirtualMachineGroupWsfcDomainProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

---



