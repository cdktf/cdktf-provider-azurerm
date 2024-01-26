# `signalrServiceNetworkAcl` Submodule <a name="`signalrServiceNetworkAcl` Submodule" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignalrServiceNetworkAcl <a name="SignalrServiceNetworkAcl" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl azurerm_signalr_service_network_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/signalrservicenetworkacl"

signalrservicenetworkacl.NewSignalrServiceNetworkAcl(scope Construct, id *string, config SignalrServiceNetworkAclConfig) SignalrServiceNetworkAcl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig">SignalrServiceNetworkAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig">SignalrServiceNetworkAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putPrivateEndpoint">PutPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putPublicNetwork">PutPublicNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.resetPrivateEndpoint">ResetPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrivateEndpoint` <a name="PutPrivateEndpoint" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putPrivateEndpoint"></a>

```go
func PutPrivateEndpoint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putPrivateEndpoint.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPublicNetwork` <a name="PutPublicNetwork" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putPublicNetwork"></a>

```go
func PutPublicNetwork(value SignalrServiceNetworkAclPublicNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putPublicNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork">SignalrServiceNetworkAclPublicNetwork</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putTimeouts"></a>

```go
func PutTimeouts(value SignalrServiceNetworkAclTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts">SignalrServiceNetworkAclTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.resetId"></a>

```go
func ResetId()
```

##### `ResetPrivateEndpoint` <a name="ResetPrivateEndpoint" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.resetPrivateEndpoint"></a>

```go
func ResetPrivateEndpoint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SignalrServiceNetworkAcl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/signalrservicenetworkacl"

signalrservicenetworkacl.SignalrServiceNetworkAcl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/signalrservicenetworkacl"

signalrservicenetworkacl.SignalrServiceNetworkAcl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/signalrservicenetworkacl"

signalrservicenetworkacl.SignalrServiceNetworkAcl_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/signalrservicenetworkacl"

signalrservicenetworkacl.SignalrServiceNetworkAcl_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SignalrServiceNetworkAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SignalrServiceNetworkAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SignalrServiceNetworkAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SignalrServiceNetworkAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.privateEndpoint">PrivateEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList">SignalrServiceNetworkAclPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.publicNetwork">PublicNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference">SignalrServiceNetworkAclPublicNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference">SignalrServiceNetworkAclTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.defaultActionInput">DefaultActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.privateEndpointInput">PrivateEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.publicNetworkInput">PublicNetworkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork">SignalrServiceNetworkAclPublicNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.signalrServiceIdInput">SignalrServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.signalrServiceId">SignalrServiceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.privateEndpoint"></a>

```go
func PrivateEndpoint() SignalrServiceNetworkAclPrivateEndpointList
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList">SignalrServiceNetworkAclPrivateEndpointList</a>

---

##### `PublicNetwork`<sup>Required</sup> <a name="PublicNetwork" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.publicNetwork"></a>

```go
func PublicNetwork() SignalrServiceNetworkAclPublicNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference">SignalrServiceNetworkAclPublicNetworkOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.timeouts"></a>

```go
func Timeouts() SignalrServiceNetworkAclTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference">SignalrServiceNetworkAclTimeoutsOutputReference</a>

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.defaultActionInput"></a>

```go
func DefaultActionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrivateEndpointInput`<sup>Optional</sup> <a name="PrivateEndpointInput" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.privateEndpointInput"></a>

```go
func PrivateEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `PublicNetworkInput`<sup>Optional</sup> <a name="PublicNetworkInput" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.publicNetworkInput"></a>

```go
func PublicNetworkInput() SignalrServiceNetworkAclPublicNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork">SignalrServiceNetworkAclPublicNetwork</a>

---

##### `SignalrServiceIdInput`<sup>Optional</sup> <a name="SignalrServiceIdInput" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.signalrServiceIdInput"></a>

```go
func SignalrServiceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.defaultAction"></a>

```go
func DefaultAction() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SignalrServiceId`<sup>Required</sup> <a name="SignalrServiceId" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.signalrServiceId"></a>

```go
func SignalrServiceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAcl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SignalrServiceNetworkAclConfig <a name="SignalrServiceNetworkAclConfig" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/signalrservicenetworkacl"

&signalrservicenetworkacl.SignalrServiceNetworkAclConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultAction: *string,
	PublicNetwork: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork,
	SignalrServiceId: *string,
	Id: *string,
	PrivateEndpoint: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#default_action SignalrServiceNetworkAcl#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.publicNetwork">PublicNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork">SignalrServiceNetworkAclPublicNetwork</a></code> | public_network block. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.signalrServiceId">SignalrServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#signalr_service_id SignalrServiceNetworkAcl#signalr_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#id SignalrServiceNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.privateEndpoint">PrivateEndpoint</a></code> | <code>interface{}</code> | private_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts">SignalrServiceNetworkAclTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.defaultAction"></a>

```go
DefaultAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#default_action SignalrServiceNetworkAcl#default_action}.

---

##### `PublicNetwork`<sup>Required</sup> <a name="PublicNetwork" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.publicNetwork"></a>

```go
PublicNetwork SignalrServiceNetworkAclPublicNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork">SignalrServiceNetworkAclPublicNetwork</a>

public_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#public_network SignalrServiceNetworkAcl#public_network}

---

##### `SignalrServiceId`<sup>Required</sup> <a name="SignalrServiceId" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.signalrServiceId"></a>

```go
SignalrServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#signalr_service_id SignalrServiceNetworkAcl#signalr_service_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#id SignalrServiceNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateEndpoint`<sup>Optional</sup> <a name="PrivateEndpoint" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.privateEndpoint"></a>

```go
PrivateEndpoint interface{}
```

- *Type:* interface{}

private_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#private_endpoint SignalrServiceNetworkAcl#private_endpoint}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclConfig.property.timeouts"></a>

```go
Timeouts SignalrServiceNetworkAclTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts">SignalrServiceNetworkAclTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#timeouts SignalrServiceNetworkAcl#timeouts}

---

### SignalrServiceNetworkAclPrivateEndpoint <a name="SignalrServiceNetworkAclPrivateEndpoint" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/signalrservicenetworkacl"

&signalrservicenetworkacl.SignalrServiceNetworkAclPrivateEndpoint {
	Id: *string,
	AllowedRequestTypes: *[]*string,
	DeniedRequestTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#id SignalrServiceNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint.property.allowedRequestTypes">AllowedRequestTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#allowed_request_types SignalrServiceNetworkAcl#allowed_request_types}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint.property.deniedRequestTypes">DeniedRequestTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#denied_request_types SignalrServiceNetworkAcl#denied_request_types}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#id SignalrServiceNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `AllowedRequestTypes`<sup>Optional</sup> <a name="AllowedRequestTypes" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint.property.allowedRequestTypes"></a>

```go
AllowedRequestTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#allowed_request_types SignalrServiceNetworkAcl#allowed_request_types}.

---

##### `DeniedRequestTypes`<sup>Optional</sup> <a name="DeniedRequestTypes" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpoint.property.deniedRequestTypes"></a>

```go
DeniedRequestTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#denied_request_types SignalrServiceNetworkAcl#denied_request_types}.

---

### SignalrServiceNetworkAclPublicNetwork <a name="SignalrServiceNetworkAclPublicNetwork" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/signalrservicenetworkacl"

&signalrservicenetworkacl.SignalrServiceNetworkAclPublicNetwork {
	AllowedRequestTypes: *[]*string,
	DeniedRequestTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork.property.allowedRequestTypes">AllowedRequestTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#allowed_request_types SignalrServiceNetworkAcl#allowed_request_types}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork.property.deniedRequestTypes">DeniedRequestTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#denied_request_types SignalrServiceNetworkAcl#denied_request_types}. |

---

##### `AllowedRequestTypes`<sup>Optional</sup> <a name="AllowedRequestTypes" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork.property.allowedRequestTypes"></a>

```go
AllowedRequestTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#allowed_request_types SignalrServiceNetworkAcl#allowed_request_types}.

---

##### `DeniedRequestTypes`<sup>Optional</sup> <a name="DeniedRequestTypes" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork.property.deniedRequestTypes"></a>

```go
DeniedRequestTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#denied_request_types SignalrServiceNetworkAcl#denied_request_types}.

---

### SignalrServiceNetworkAclTimeouts <a name="SignalrServiceNetworkAclTimeouts" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/signalrservicenetworkacl"

&signalrservicenetworkacl.SignalrServiceNetworkAclTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#create SignalrServiceNetworkAcl#create}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#delete SignalrServiceNetworkAcl#delete}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#read SignalrServiceNetworkAcl#read}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#update SignalrServiceNetworkAcl#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#create SignalrServiceNetworkAcl#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#delete SignalrServiceNetworkAcl#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#read SignalrServiceNetworkAcl#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/signalr_service_network_acl#update SignalrServiceNetworkAcl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignalrServiceNetworkAclPrivateEndpointList <a name="SignalrServiceNetworkAclPrivateEndpointList" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/signalrservicenetworkacl"

signalrservicenetworkacl.NewSignalrServiceNetworkAclPrivateEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SignalrServiceNetworkAclPrivateEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.get"></a>

```go
func Get(index *f64) SignalrServiceNetworkAclPrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SignalrServiceNetworkAclPrivateEndpointOutputReference <a name="SignalrServiceNetworkAclPrivateEndpointOutputReference" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/signalrservicenetworkacl"

signalrservicenetworkacl.NewSignalrServiceNetworkAclPrivateEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SignalrServiceNetworkAclPrivateEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.resetAllowedRequestTypes">ResetAllowedRequestTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.resetDeniedRequestTypes">ResetDeniedRequestTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRequestTypes` <a name="ResetAllowedRequestTypes" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.resetAllowedRequestTypes"></a>

```go
func ResetAllowedRequestTypes()
```

##### `ResetDeniedRequestTypes` <a name="ResetDeniedRequestTypes" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.resetDeniedRequestTypes"></a>

```go
func ResetDeniedRequestTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypesInput">AllowedRequestTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypesInput">DeniedRequestTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypes">AllowedRequestTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypes">DeniedRequestTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRequestTypesInput`<sup>Optional</sup> <a name="AllowedRequestTypesInput" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypesInput"></a>

```go
func AllowedRequestTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeniedRequestTypesInput`<sup>Optional</sup> <a name="DeniedRequestTypesInput" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypesInput"></a>

```go
func DeniedRequestTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AllowedRequestTypes`<sup>Required</sup> <a name="AllowedRequestTypes" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypes"></a>

```go
func AllowedRequestTypes() *[]*string
```

- *Type:* *[]*string

---

##### `DeniedRequestTypes`<sup>Required</sup> <a name="DeniedRequestTypes" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypes"></a>

```go
func DeniedRequestTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPrivateEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SignalrServiceNetworkAclPublicNetworkOutputReference <a name="SignalrServiceNetworkAclPublicNetworkOutputReference" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/signalrservicenetworkacl"

signalrservicenetworkacl.NewSignalrServiceNetworkAclPublicNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SignalrServiceNetworkAclPublicNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.resetAllowedRequestTypes">ResetAllowedRequestTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.resetDeniedRequestTypes">ResetDeniedRequestTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRequestTypes` <a name="ResetAllowedRequestTypes" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.resetAllowedRequestTypes"></a>

```go
func ResetAllowedRequestTypes()
```

##### `ResetDeniedRequestTypes` <a name="ResetDeniedRequestTypes" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.resetDeniedRequestTypes"></a>

```go
func ResetDeniedRequestTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.allowedRequestTypesInput">AllowedRequestTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.deniedRequestTypesInput">DeniedRequestTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.allowedRequestTypes">AllowedRequestTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.deniedRequestTypes">DeniedRequestTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork">SignalrServiceNetworkAclPublicNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRequestTypesInput`<sup>Optional</sup> <a name="AllowedRequestTypesInput" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.allowedRequestTypesInput"></a>

```go
func AllowedRequestTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeniedRequestTypesInput`<sup>Optional</sup> <a name="DeniedRequestTypesInput" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.deniedRequestTypesInput"></a>

```go
func DeniedRequestTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedRequestTypes`<sup>Required</sup> <a name="AllowedRequestTypes" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.allowedRequestTypes"></a>

```go
func AllowedRequestTypes() *[]*string
```

- *Type:* *[]*string

---

##### `DeniedRequestTypes`<sup>Required</sup> <a name="DeniedRequestTypes" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.deniedRequestTypes"></a>

```go
func DeniedRequestTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() SignalrServiceNetworkAclPublicNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclPublicNetwork">SignalrServiceNetworkAclPublicNetwork</a>

---


### SignalrServiceNetworkAclTimeoutsOutputReference <a name="SignalrServiceNetworkAclTimeoutsOutputReference" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/signalrservicenetworkacl"

signalrservicenetworkacl.NewSignalrServiceNetworkAclTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SignalrServiceNetworkAclTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrServiceNetworkAcl.SignalrServiceNetworkAclTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



