# `subnetServiceEndpointStoragePolicy` Submodule <a name="`subnetServiceEndpointStoragePolicy` Submodule" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubnetServiceEndpointStoragePolicy <a name="SubnetServiceEndpointStoragePolicy" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy azurerm_subnet_service_endpoint_storage_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/subnetserviceendpointstoragepolicy"

subnetserviceendpointstoragepolicy.NewSubnetServiceEndpointStoragePolicy(scope Construct, id *string, config SubnetServiceEndpointStoragePolicyConfig) SubnetServiceEndpointStoragePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig">SubnetServiceEndpointStoragePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig">SubnetServiceEndpointStoragePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putDefinition">PutDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetDefinition">ResetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefinition` <a name="PutDefinition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putDefinition"></a>

```go
func PutDefinition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putDefinition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putTimeouts"></a>

```go
func PutTimeouts(value SubnetServiceEndpointStoragePolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a>

---

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetDefinition"></a>

```go
func ResetDefinition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SubnetServiceEndpointStoragePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/subnetserviceendpointstoragepolicy"

subnetserviceendpointstoragepolicy.SubnetServiceEndpointStoragePolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/subnetserviceendpointstoragepolicy"

subnetserviceendpointstoragepolicy.SubnetServiceEndpointStoragePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/subnetserviceendpointstoragepolicy"

subnetserviceendpointstoragepolicy.SubnetServiceEndpointStoragePolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/subnetserviceendpointstoragepolicy"

subnetserviceendpointstoragepolicy.SubnetServiceEndpointStoragePolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SubnetServiceEndpointStoragePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SubnetServiceEndpointStoragePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SubnetServiceEndpointStoragePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SubnetServiceEndpointStoragePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.definition">Definition</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList">SubnetServiceEndpointStoragePolicyDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference">SubnetServiceEndpointStoragePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.definitionInput">DefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.definition"></a>

```go
func Definition() SubnetServiceEndpointStoragePolicyDefinitionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList">SubnetServiceEndpointStoragePolicyDefinitionList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.timeouts"></a>

```go
func Timeouts() SubnetServiceEndpointStoragePolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference">SubnetServiceEndpointStoragePolicyTimeoutsOutputReference</a>

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.definitionInput"></a>

```go
func DefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SubnetServiceEndpointStoragePolicyConfig <a name="SubnetServiceEndpointStoragePolicyConfig" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/subnetserviceendpointstoragepolicy"

&subnetserviceendpointstoragepolicy.SubnetServiceEndpointStoragePolicyConfig {
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
	Definition: interface{},
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#location SubnetServiceEndpointStoragePolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#resource_group_name SubnetServiceEndpointStoragePolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.definition">Definition</a></code> | <code>interface{}</code> | definition block. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#id SubnetServiceEndpointStoragePolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#tags SubnetServiceEndpointStoragePolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#location SubnetServiceEndpointStoragePolicy#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#resource_group_name SubnetServiceEndpointStoragePolicy#resource_group_name}.

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.definition"></a>

```go
Definition interface{}
```

- *Type:* interface{}

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#definition SubnetServiceEndpointStoragePolicy#definition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#id SubnetServiceEndpointStoragePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#tags SubnetServiceEndpointStoragePolicy#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.timeouts"></a>

```go
Timeouts SubnetServiceEndpointStoragePolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#timeouts SubnetServiceEndpointStoragePolicy#timeouts}

---

### SubnetServiceEndpointStoragePolicyDefinition <a name="SubnetServiceEndpointStoragePolicyDefinition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/subnetserviceendpointstoragepolicy"

&subnetserviceendpointstoragepolicy.SubnetServiceEndpointStoragePolicyDefinition {
	Name: *string,
	ServiceResources: *[]*string,
	Description: *string,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.serviceResources">ServiceResources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#service_resources SubnetServiceEndpointStoragePolicy#service_resources}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#description SubnetServiceEndpointStoragePolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#service SubnetServiceEndpointStoragePolicy#service}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}.

---

##### `ServiceResources`<sup>Required</sup> <a name="ServiceResources" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.serviceResources"></a>

```go
ServiceResources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#service_resources SubnetServiceEndpointStoragePolicy#service_resources}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#description SubnetServiceEndpointStoragePolicy#description}.

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#service SubnetServiceEndpointStoragePolicy#service}.

---

### SubnetServiceEndpointStoragePolicyTimeouts <a name="SubnetServiceEndpointStoragePolicyTimeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/subnetserviceendpointstoragepolicy"

&subnetserviceendpointstoragepolicy.SubnetServiceEndpointStoragePolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#create SubnetServiceEndpointStoragePolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#delete SubnetServiceEndpointStoragePolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#read SubnetServiceEndpointStoragePolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#update SubnetServiceEndpointStoragePolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#create SubnetServiceEndpointStoragePolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#delete SubnetServiceEndpointStoragePolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#read SubnetServiceEndpointStoragePolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/subnet_service_endpoint_storage_policy#update SubnetServiceEndpointStoragePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubnetServiceEndpointStoragePolicyDefinitionList <a name="SubnetServiceEndpointStoragePolicyDefinitionList" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/subnetserviceendpointstoragepolicy"

subnetserviceendpointstoragepolicy.NewSubnetServiceEndpointStoragePolicyDefinitionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SubnetServiceEndpointStoragePolicyDefinitionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.get"></a>

```go
func Get(index *f64) SubnetServiceEndpointStoragePolicyDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SubnetServiceEndpointStoragePolicyDefinitionOutputReference <a name="SubnetServiceEndpointStoragePolicyDefinitionOutputReference" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/subnetserviceendpointstoragepolicy"

subnetserviceendpointstoragepolicy.NewSubnetServiceEndpointStoragePolicyDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SubnetServiceEndpointStoragePolicyDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceResourcesInput">ServiceResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceResources">ServiceResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `ServiceResourcesInput`<sup>Optional</sup> <a name="ServiceResourcesInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceResourcesInput"></a>

```go
func ServiceResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `ServiceResources`<sup>Required</sup> <a name="ServiceResources" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceResources"></a>

```go
func ServiceResources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SubnetServiceEndpointStoragePolicyTimeoutsOutputReference <a name="SubnetServiceEndpointStoragePolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/subnetserviceendpointstoragepolicy"

subnetserviceendpointstoragepolicy.NewSubnetServiceEndpointStoragePolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SubnetServiceEndpointStoragePolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



