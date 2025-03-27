# `applicationLoadBalancerSubnetAssociation` Submodule <a name="`applicationLoadBalancerSubnetAssociation` Submodule" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationLoadBalancerSubnetAssociation <a name="ApplicationLoadBalancerSubnetAssociation" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association azurerm_application_load_balancer_subnet_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/applicationloadbalancersubnetassociation"

applicationloadbalancersubnetassociation.NewApplicationLoadBalancerSubnetAssociation(scope Construct, id *string, config ApplicationLoadBalancerSubnetAssociationConfig) ApplicationLoadBalancerSubnetAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig">ApplicationLoadBalancerSubnetAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig">ApplicationLoadBalancerSubnetAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.putTimeouts"></a>

```go
func PutTimeouts(value ApplicationLoadBalancerSubnetAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationLoadBalancerSubnetAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/applicationloadbalancersubnetassociation"

applicationloadbalancersubnetassociation.ApplicationLoadBalancerSubnetAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/applicationloadbalancersubnetassociation"

applicationloadbalancersubnetassociation.ApplicationLoadBalancerSubnetAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/applicationloadbalancersubnetassociation"

applicationloadbalancersubnetassociation.ApplicationLoadBalancerSubnetAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/applicationloadbalancersubnetassociation"

applicationloadbalancersubnetassociation.ApplicationLoadBalancerSubnetAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApplicationLoadBalancerSubnetAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApplicationLoadBalancerSubnetAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApplicationLoadBalancerSubnetAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationLoadBalancerSubnetAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference">ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.applicationLoadBalancerIdInput">ApplicationLoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.applicationLoadBalancerId">ApplicationLoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.timeouts"></a>

```go
func Timeouts() ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference">ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference</a>

---

##### `ApplicationLoadBalancerIdInput`<sup>Optional</sup> <a name="ApplicationLoadBalancerIdInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.applicationLoadBalancerIdInput"></a>

```go
func ApplicationLoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationLoadBalancerId`<sup>Required</sup> <a name="ApplicationLoadBalancerId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.applicationLoadBalancerId"></a>

```go
func ApplicationLoadBalancerId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationLoadBalancerSubnetAssociationConfig <a name="ApplicationLoadBalancerSubnetAssociationConfig" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/applicationloadbalancersubnetassociation"

&applicationloadbalancersubnetassociation.ApplicationLoadBalancerSubnetAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationLoadBalancerId: *string,
	Name: *string,
	SubnetId: *string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.applicationLoadBalancerId">ApplicationLoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#application_load_balancer_id ApplicationLoadBalancerSubnetAssociation#application_load_balancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#name ApplicationLoadBalancerSubnetAssociation#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#subnet_id ApplicationLoadBalancerSubnetAssociation#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#id ApplicationLoadBalancerSubnetAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#tags ApplicationLoadBalancerSubnetAssociation#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationLoadBalancerId`<sup>Required</sup> <a name="ApplicationLoadBalancerId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.applicationLoadBalancerId"></a>

```go
ApplicationLoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#application_load_balancer_id ApplicationLoadBalancerSubnetAssociation#application_load_balancer_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#name ApplicationLoadBalancerSubnetAssociation#name}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#subnet_id ApplicationLoadBalancerSubnetAssociation#subnet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#id ApplicationLoadBalancerSubnetAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#tags ApplicationLoadBalancerSubnetAssociation#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.timeouts"></a>

```go
Timeouts ApplicationLoadBalancerSubnetAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#timeouts ApplicationLoadBalancerSubnetAssociation#timeouts}

---

### ApplicationLoadBalancerSubnetAssociationTimeouts <a name="ApplicationLoadBalancerSubnetAssociationTimeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/applicationloadbalancersubnetassociation"

&applicationloadbalancersubnetassociation.ApplicationLoadBalancerSubnetAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#create ApplicationLoadBalancerSubnetAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#delete ApplicationLoadBalancerSubnetAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#read ApplicationLoadBalancerSubnetAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#update ApplicationLoadBalancerSubnetAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#create ApplicationLoadBalancerSubnetAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#delete ApplicationLoadBalancerSubnetAssociation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#read ApplicationLoadBalancerSubnetAssociation#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/application_load_balancer_subnet_association#update ApplicationLoadBalancerSubnetAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference <a name="ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/applicationloadbalancersubnetassociation"

applicationloadbalancersubnetassociation.NewApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



