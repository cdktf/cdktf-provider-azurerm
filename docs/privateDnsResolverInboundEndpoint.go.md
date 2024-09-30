# `privateDnsResolverInboundEndpoint` Submodule <a name="`privateDnsResolverInboundEndpoint` Submodule" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsResolverInboundEndpoint <a name="PrivateDnsResolverInboundEndpoint" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint azurerm_private_dns_resolver_inbound_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverinboundendpoint"

privatednsresolverinboundendpoint.NewPrivateDnsResolverInboundEndpoint(scope Construct, id *string, config PrivateDnsResolverInboundEndpointConfig) PrivateDnsResolverInboundEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig">PrivateDnsResolverInboundEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig">PrivateDnsResolverInboundEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.putIpConfigurations">PutIpConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpConfigurations` <a name="PutIpConfigurations" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.putIpConfigurations"></a>

```go
func PutIpConfigurations(value PrivateDnsResolverInboundEndpointIpConfigurations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.putIpConfigurations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations">PrivateDnsResolverInboundEndpointIpConfigurations</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value PrivateDnsResolverInboundEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts">PrivateDnsResolverInboundEndpointTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateDnsResolverInboundEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverinboundendpoint"

privatednsresolverinboundendpoint.PrivateDnsResolverInboundEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverinboundendpoint"

privatednsresolverinboundendpoint.PrivateDnsResolverInboundEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverinboundendpoint"

privatednsresolverinboundendpoint.PrivateDnsResolverInboundEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverinboundendpoint"

privatednsresolverinboundendpoint.PrivateDnsResolverInboundEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PrivateDnsResolverInboundEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PrivateDnsResolverInboundEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PrivateDnsResolverInboundEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsResolverInboundEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.ipConfigurations">IpConfigurations</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference">PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference">PrivateDnsResolverInboundEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.ipConfigurationsInput">IpConfigurationsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations">PrivateDnsResolverInboundEndpointIpConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.privateDnsResolverIdInput">PrivateDnsResolverIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.privateDnsResolverId">PrivateDnsResolverId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpConfigurations`<sup>Required</sup> <a name="IpConfigurations" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.ipConfigurations"></a>

```go
func IpConfigurations() PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference">PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.timeouts"></a>

```go
func Timeouts() PrivateDnsResolverInboundEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference">PrivateDnsResolverInboundEndpointTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpConfigurationsInput`<sup>Optional</sup> <a name="IpConfigurationsInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.ipConfigurationsInput"></a>

```go
func IpConfigurationsInput() PrivateDnsResolverInboundEndpointIpConfigurations
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations">PrivateDnsResolverInboundEndpointIpConfigurations</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateDnsResolverIdInput`<sup>Optional</sup> <a name="PrivateDnsResolverIdInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.privateDnsResolverIdInput"></a>

```go
func PrivateDnsResolverIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateDnsResolverId`<sup>Required</sup> <a name="PrivateDnsResolverId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.privateDnsResolverId"></a>

```go
func PrivateDnsResolverId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsResolverInboundEndpointConfig <a name="PrivateDnsResolverInboundEndpointConfig" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverinboundendpoint"

&privatednsresolverinboundendpoint.PrivateDnsResolverInboundEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IpConfigurations: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations,
	Location: *string,
	Name: *string,
	PrivateDnsResolverId: *string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.ipConfigurations">IpConfigurations</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations">PrivateDnsResolverInboundEndpointIpConfigurations</a></code> | ip_configurations block. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#location PrivateDnsResolverInboundEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#name PrivateDnsResolverInboundEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.privateDnsResolverId">PrivateDnsResolverId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#private_dns_resolver_id PrivateDnsResolverInboundEndpoint#private_dns_resolver_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#id PrivateDnsResolverInboundEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#tags PrivateDnsResolverInboundEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts">PrivateDnsResolverInboundEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpConfigurations`<sup>Required</sup> <a name="IpConfigurations" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.ipConfigurations"></a>

```go
IpConfigurations PrivateDnsResolverInboundEndpointIpConfigurations
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations">PrivateDnsResolverInboundEndpointIpConfigurations</a>

ip_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#ip_configurations PrivateDnsResolverInboundEndpoint#ip_configurations}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#location PrivateDnsResolverInboundEndpoint#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#name PrivateDnsResolverInboundEndpoint#name}.

---

##### `PrivateDnsResolverId`<sup>Required</sup> <a name="PrivateDnsResolverId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.privateDnsResolverId"></a>

```go
PrivateDnsResolverId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#private_dns_resolver_id PrivateDnsResolverInboundEndpoint#private_dns_resolver_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#id PrivateDnsResolverInboundEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#tags PrivateDnsResolverInboundEndpoint#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointConfig.property.timeouts"></a>

```go
Timeouts PrivateDnsResolverInboundEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts">PrivateDnsResolverInboundEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#timeouts PrivateDnsResolverInboundEndpoint#timeouts}

---

### PrivateDnsResolverInboundEndpointIpConfigurations <a name="PrivateDnsResolverInboundEndpointIpConfigurations" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverinboundendpoint"

&privatednsresolverinboundendpoint.PrivateDnsResolverInboundEndpointIpConfigurations {
	SubnetId: *string,
	PrivateIpAddress: *string,
	PrivateIpAllocationMethod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#subnet_id PrivateDnsResolverInboundEndpoint#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#private_ip_address PrivateDnsResolverInboundEndpoint#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations.property.privateIpAllocationMethod">PrivateIpAllocationMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#private_ip_allocation_method PrivateDnsResolverInboundEndpoint#private_ip_allocation_method}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#subnet_id PrivateDnsResolverInboundEndpoint#subnet_id}.

---

##### `PrivateIpAddress`<sup>Optional</sup> <a name="PrivateIpAddress" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations.property.privateIpAddress"></a>

```go
PrivateIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#private_ip_address PrivateDnsResolverInboundEndpoint#private_ip_address}.

---

##### `PrivateIpAllocationMethod`<sup>Optional</sup> <a name="PrivateIpAllocationMethod" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations.property.privateIpAllocationMethod"></a>

```go
PrivateIpAllocationMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#private_ip_allocation_method PrivateDnsResolverInboundEndpoint#private_ip_allocation_method}.

---

### PrivateDnsResolverInboundEndpointTimeouts <a name="PrivateDnsResolverInboundEndpointTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverinboundendpoint"

&privatednsresolverinboundendpoint.PrivateDnsResolverInboundEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#create PrivateDnsResolverInboundEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#delete PrivateDnsResolverInboundEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#read PrivateDnsResolverInboundEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#update PrivateDnsResolverInboundEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#create PrivateDnsResolverInboundEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#delete PrivateDnsResolverInboundEndpoint#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#read PrivateDnsResolverInboundEndpoint#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/private_dns_resolver_inbound_endpoint#update PrivateDnsResolverInboundEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference <a name="PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverinboundendpoint"

privatednsresolverinboundendpoint.NewPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resetPrivateIpAddress">ResetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resetPrivateIpAllocationMethod">ResetPrivateIpAllocationMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrivateIpAddress` <a name="ResetPrivateIpAddress" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resetPrivateIpAddress"></a>

```go
func ResetPrivateIpAddress()
```

##### `ResetPrivateIpAllocationMethod` <a name="ResetPrivateIpAllocationMethod" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resetPrivateIpAllocationMethod"></a>

```go
func ResetPrivateIpAllocationMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAddressInput">PrivateIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAllocationMethodInput">PrivateIpAllocationMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAllocationMethod">PrivateIpAllocationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations">PrivateDnsResolverInboundEndpointIpConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateIpAddressInput`<sup>Optional</sup> <a name="PrivateIpAddressInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAddressInput"></a>

```go
func PrivateIpAddressInput() *string
```

- *Type:* *string

---

##### `PrivateIpAllocationMethodInput`<sup>Optional</sup> <a name="PrivateIpAllocationMethodInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAllocationMethodInput"></a>

```go
func PrivateIpAllocationMethodInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `PrivateIpAllocationMethod`<sup>Required</sup> <a name="PrivateIpAllocationMethod" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAllocationMethod"></a>

```go
func PrivateIpAllocationMethod() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivateDnsResolverInboundEndpointIpConfigurations
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointIpConfigurations">PrivateDnsResolverInboundEndpointIpConfigurations</a>

---


### PrivateDnsResolverInboundEndpointTimeoutsOutputReference <a name="PrivateDnsResolverInboundEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/privatednsresolverinboundendpoint"

privatednsresolverinboundendpoint.NewPrivateDnsResolverInboundEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivateDnsResolverInboundEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateDnsResolverInboundEndpoint.PrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



