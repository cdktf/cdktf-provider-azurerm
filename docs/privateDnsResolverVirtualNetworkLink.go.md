# `privateDnsResolverVirtualNetworkLink` Submodule <a name="`privateDnsResolverVirtualNetworkLink` Submodule" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsResolverVirtualNetworkLink <a name="PrivateDnsResolverVirtualNetworkLink" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link azurerm_private_dns_resolver_virtual_network_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolvervirtualnetworklink"

privatednsresolvervirtualnetworklink.NewPrivateDnsResolverVirtualNetworkLink(scope Construct, id *string, config PrivateDnsResolverVirtualNetworkLinkConfig) PrivateDnsResolverVirtualNetworkLink
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig">PrivateDnsResolverVirtualNetworkLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig">PrivateDnsResolverVirtualNetworkLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.putTimeouts"></a>

```go
func PutTimeouts(value PrivateDnsResolverVirtualNetworkLinkTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts">PrivateDnsResolverVirtualNetworkLinkTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateDnsResolverVirtualNetworkLink resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolvervirtualnetworklink"

privatednsresolvervirtualnetworklink.PrivateDnsResolverVirtualNetworkLink_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolvervirtualnetworklink"

privatednsresolvervirtualnetworklink.PrivateDnsResolverVirtualNetworkLink_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolvervirtualnetworklink"

privatednsresolvervirtualnetworklink.PrivateDnsResolverVirtualNetworkLink_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolvervirtualnetworklink"

privatednsresolvervirtualnetworklink.PrivateDnsResolverVirtualNetworkLink_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PrivateDnsResolverVirtualNetworkLink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PrivateDnsResolverVirtualNetworkLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PrivateDnsResolverVirtualNetworkLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsResolverVirtualNetworkLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference">PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetIdInput">DnsForwardingRulesetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetId">DnsForwardingRulesetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.timeouts"></a>

```go
func Timeouts() PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference">PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference</a>

---

##### `DnsForwardingRulesetIdInput`<sup>Optional</sup> <a name="DnsForwardingRulesetIdInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetIdInput"></a>

```go
func DnsForwardingRulesetIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `DnsForwardingRulesetId`<sup>Required</sup> <a name="DnsForwardingRulesetId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetId"></a>

```go
func DnsForwardingRulesetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsResolverVirtualNetworkLinkConfig <a name="PrivateDnsResolverVirtualNetworkLinkConfig" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolvervirtualnetworklink"

&privatednsresolvervirtualnetworklink.PrivateDnsResolverVirtualNetworkLinkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DnsForwardingRulesetId: *string,
	Name: *string,
	VirtualNetworkId: *string,
	Id: *string,
	Metadata: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.dnsForwardingRulesetId">DnsForwardingRulesetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#dns_forwarding_ruleset_id PrivateDnsResolverVirtualNetworkLink#dns_forwarding_ruleset_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#name PrivateDnsResolverVirtualNetworkLink#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#virtual_network_id PrivateDnsResolverVirtualNetworkLink#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#id PrivateDnsResolverVirtualNetworkLink#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#metadata PrivateDnsResolverVirtualNetworkLink#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts">PrivateDnsResolverVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DnsForwardingRulesetId`<sup>Required</sup> <a name="DnsForwardingRulesetId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.dnsForwardingRulesetId"></a>

```go
DnsForwardingRulesetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#dns_forwarding_ruleset_id PrivateDnsResolverVirtualNetworkLink#dns_forwarding_ruleset_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#name PrivateDnsResolverVirtualNetworkLink#name}.

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#virtual_network_id PrivateDnsResolverVirtualNetworkLink#virtual_network_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#id PrivateDnsResolverVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#metadata PrivateDnsResolverVirtualNetworkLink#metadata}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.timeouts"></a>

```go
Timeouts PrivateDnsResolverVirtualNetworkLinkTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts">PrivateDnsResolverVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#timeouts PrivateDnsResolverVirtualNetworkLink#timeouts}

---

### PrivateDnsResolverVirtualNetworkLinkTimeouts <a name="PrivateDnsResolverVirtualNetworkLinkTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolvervirtualnetworklink"

&privatednsresolvervirtualnetworklink.PrivateDnsResolverVirtualNetworkLinkTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#create PrivateDnsResolverVirtualNetworkLink#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#delete PrivateDnsResolverVirtualNetworkLink#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#read PrivateDnsResolverVirtualNetworkLink#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#update PrivateDnsResolverVirtualNetworkLink#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#create PrivateDnsResolverVirtualNetworkLink#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#delete PrivateDnsResolverVirtualNetworkLink#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#read PrivateDnsResolverVirtualNetworkLink#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/private_dns_resolver_virtual_network_link#update PrivateDnsResolverVirtualNetworkLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference <a name="PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolvervirtualnetworklink"

privatednsresolvervirtualnetworklink.NewPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



