# `arcMachineAutomanageConfigurationAssignment` Submodule <a name="`arcMachineAutomanageConfigurationAssignment` Submodule" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArcMachineAutomanageConfigurationAssignment <a name="ArcMachineAutomanageConfigurationAssignment" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/arc_machine_automanage_configuration_assignment azurerm_arc_machine_automanage_configuration_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/arcmachineautomanageconfigurationassignment"

arcmachineautomanageconfigurationassignment.NewArcMachineAutomanageConfigurationAssignment(scope Construct, id *string, config ArcMachineAutomanageConfigurationAssignmentConfig) ArcMachineAutomanageConfigurationAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig">ArcMachineAutomanageConfigurationAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig">ArcMachineAutomanageConfigurationAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.putTimeouts"></a>

```go
func PutTimeouts(value ArcMachineAutomanageConfigurationAssignmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts">ArcMachineAutomanageConfigurationAssignmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ArcMachineAutomanageConfigurationAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/arcmachineautomanageconfigurationassignment"

arcmachineautomanageconfigurationassignment.ArcMachineAutomanageConfigurationAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/arcmachineautomanageconfigurationassignment"

arcmachineautomanageconfigurationassignment.ArcMachineAutomanageConfigurationAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/arcmachineautomanageconfigurationassignment"

arcmachineautomanageconfigurationassignment.ArcMachineAutomanageConfigurationAssignment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/arcmachineautomanageconfigurationassignment"

arcmachineautomanageconfigurationassignment.ArcMachineAutomanageConfigurationAssignment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ArcMachineAutomanageConfigurationAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ArcMachineAutomanageConfigurationAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ArcMachineAutomanageConfigurationAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/arc_machine_automanage_configuration_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ArcMachineAutomanageConfigurationAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference">ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.arcMachineIdInput">ArcMachineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.configurationIdInput">ConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.arcMachineId">ArcMachineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.configurationId">ConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.timeouts"></a>

```go
func Timeouts() ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference">ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference</a>

---

##### `ArcMachineIdInput`<sup>Optional</sup> <a name="ArcMachineIdInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.arcMachineIdInput"></a>

```go
func ArcMachineIdInput() *string
```

- *Type:* *string

---

##### `ConfigurationIdInput`<sup>Optional</sup> <a name="ConfigurationIdInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.configurationIdInput"></a>

```go
func ConfigurationIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ArcMachineId`<sup>Required</sup> <a name="ArcMachineId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.arcMachineId"></a>

```go
func ArcMachineId() *string
```

- *Type:* *string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.configurationId"></a>

```go
func ConfigurationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ArcMachineAutomanageConfigurationAssignmentConfig <a name="ArcMachineAutomanageConfigurationAssignmentConfig" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/arcmachineautomanageconfigurationassignment"

&arcmachineautomanageconfigurationassignment.ArcMachineAutomanageConfigurationAssignmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ArcMachineId: *string,
	ConfigurationId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.arcMachineId">ArcMachineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/arc_machine_automanage_configuration_assignment#arc_machine_id ArcMachineAutomanageConfigurationAssignment#arc_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.configurationId">ConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/arc_machine_automanage_configuration_assignment#configuration_id ArcMachineAutomanageConfigurationAssignment#configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/arc_machine_automanage_configuration_assignment#id ArcMachineAutomanageConfigurationAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts">ArcMachineAutomanageConfigurationAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArcMachineId`<sup>Required</sup> <a name="ArcMachineId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.arcMachineId"></a>

```go
ArcMachineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/arc_machine_automanage_configuration_assignment#arc_machine_id ArcMachineAutomanageConfigurationAssignment#arc_machine_id}.

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.configurationId"></a>

```go
ConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/arc_machine_automanage_configuration_assignment#configuration_id ArcMachineAutomanageConfigurationAssignment#configuration_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/arc_machine_automanage_configuration_assignment#id ArcMachineAutomanageConfigurationAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentConfig.property.timeouts"></a>

```go
Timeouts ArcMachineAutomanageConfigurationAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts">ArcMachineAutomanageConfigurationAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/arc_machine_automanage_configuration_assignment#timeouts ArcMachineAutomanageConfigurationAssignment#timeouts}

---

### ArcMachineAutomanageConfigurationAssignmentTimeouts <a name="ArcMachineAutomanageConfigurationAssignmentTimeouts" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/arcmachineautomanageconfigurationassignment"

&arcmachineautomanageconfigurationassignment.ArcMachineAutomanageConfigurationAssignmentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/arc_machine_automanage_configuration_assignment#create ArcMachineAutomanageConfigurationAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/arc_machine_automanage_configuration_assignment#delete ArcMachineAutomanageConfigurationAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/arc_machine_automanage_configuration_assignment#read ArcMachineAutomanageConfigurationAssignment#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/arc_machine_automanage_configuration_assignment#create ArcMachineAutomanageConfigurationAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/arc_machine_automanage_configuration_assignment#delete ArcMachineAutomanageConfigurationAssignment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/arc_machine_automanage_configuration_assignment#read ArcMachineAutomanageConfigurationAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference <a name="ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/arcmachineautomanageconfigurationassignment"

arcmachineautomanageconfigurationassignment.NewArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.arcMachineAutomanageConfigurationAssignment.ArcMachineAutomanageConfigurationAssignmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



