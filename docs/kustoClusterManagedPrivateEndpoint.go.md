# `kustoClusterManagedPrivateEndpoint` Submodule <a name="`kustoClusterManagedPrivateEndpoint` Submodule" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoClusterManagedPrivateEndpoint <a name="KustoClusterManagedPrivateEndpoint" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint azurerm_kusto_cluster_managed_private_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoclustermanagedprivateendpoint"

kustoclustermanagedprivateendpoint.NewKustoClusterManagedPrivateEndpoint(scope Construct, id *string, config KustoClusterManagedPrivateEndpointConfig) KustoClusterManagedPrivateEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig">KustoClusterManagedPrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig">KustoClusterManagedPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetPrivateLinkResourceRegion">ResetPrivateLinkResourceRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetRequestMessage">ResetRequestMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value KustoClusterManagedPrivateEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts">KustoClusterManagedPrivateEndpointTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetPrivateLinkResourceRegion` <a name="ResetPrivateLinkResourceRegion" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetPrivateLinkResourceRegion"></a>

```go
func ResetPrivateLinkResourceRegion()
```

##### `ResetRequestMessage` <a name="ResetRequestMessage" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetRequestMessage"></a>

```go
func ResetRequestMessage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KustoClusterManagedPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoclustermanagedprivateendpoint"

kustoclustermanagedprivateendpoint.KustoClusterManagedPrivateEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoclustermanagedprivateendpoint"

kustoclustermanagedprivateendpoint.KustoClusterManagedPrivateEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoclustermanagedprivateendpoint"

kustoclustermanagedprivateendpoint.KustoClusterManagedPrivateEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoclustermanagedprivateendpoint"

kustoclustermanagedprivateendpoint.KustoClusterManagedPrivateEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KustoClusterManagedPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KustoClusterManagedPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KustoClusterManagedPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KustoClusterManagedPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference">KustoClusterManagedPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceIdInput">PrivateLinkResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceRegionInput">PrivateLinkResourceRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.requestMessageInput">RequestMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceId">PrivateLinkResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceRegion">PrivateLinkResourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.requestMessage">RequestMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.timeouts"></a>

```go
func Timeouts() KustoClusterManagedPrivateEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference">KustoClusterManagedPrivateEndpointTimeoutsOutputReference</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateLinkResourceIdInput`<sup>Optional</sup> <a name="PrivateLinkResourceIdInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceIdInput"></a>

```go
func PrivateLinkResourceIdInput() *string
```

- *Type:* *string

---

##### `PrivateLinkResourceRegionInput`<sup>Optional</sup> <a name="PrivateLinkResourceRegionInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceRegionInput"></a>

```go
func PrivateLinkResourceRegionInput() *string
```

- *Type:* *string

---

##### `RequestMessageInput`<sup>Optional</sup> <a name="RequestMessageInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.requestMessageInput"></a>

```go
func RequestMessageInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateLinkResourceId`<sup>Required</sup> <a name="PrivateLinkResourceId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceId"></a>

```go
func PrivateLinkResourceId() *string
```

- *Type:* *string

---

##### `PrivateLinkResourceRegion`<sup>Required</sup> <a name="PrivateLinkResourceRegion" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceRegion"></a>

```go
func PrivateLinkResourceRegion() *string
```

- *Type:* *string

---

##### `RequestMessage`<sup>Required</sup> <a name="RequestMessage" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.requestMessage"></a>

```go
func RequestMessage() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KustoClusterManagedPrivateEndpointConfig <a name="KustoClusterManagedPrivateEndpointConfig" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoclustermanagedprivateendpoint"

&kustoclustermanagedprivateendpoint.KustoClusterManagedPrivateEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	GroupId: *string,
	Name: *string,
	PrivateLinkResourceId: *string,
	ResourceGroupName: *string,
	Id: *string,
	PrivateLinkResourceRegion: *string,
	RequestMessage: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#cluster_name KustoClusterManagedPrivateEndpoint#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#group_id KustoClusterManagedPrivateEndpoint#group_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#name KustoClusterManagedPrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.privateLinkResourceId">PrivateLinkResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#private_link_resource_id KustoClusterManagedPrivateEndpoint#private_link_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#resource_group_name KustoClusterManagedPrivateEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#id KustoClusterManagedPrivateEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.privateLinkResourceRegion">PrivateLinkResourceRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#private_link_resource_region KustoClusterManagedPrivateEndpoint#private_link_resource_region}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.requestMessage">RequestMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#request_message KustoClusterManagedPrivateEndpoint#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts">KustoClusterManagedPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#cluster_name KustoClusterManagedPrivateEndpoint#cluster_name}.

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#group_id KustoClusterManagedPrivateEndpoint#group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#name KustoClusterManagedPrivateEndpoint#name}.

---

##### `PrivateLinkResourceId`<sup>Required</sup> <a name="PrivateLinkResourceId" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.privateLinkResourceId"></a>

```go
PrivateLinkResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#private_link_resource_id KustoClusterManagedPrivateEndpoint#private_link_resource_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#resource_group_name KustoClusterManagedPrivateEndpoint#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#id KustoClusterManagedPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateLinkResourceRegion`<sup>Optional</sup> <a name="PrivateLinkResourceRegion" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.privateLinkResourceRegion"></a>

```go
PrivateLinkResourceRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#private_link_resource_region KustoClusterManagedPrivateEndpoint#private_link_resource_region}.

---

##### `RequestMessage`<sup>Optional</sup> <a name="RequestMessage" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.requestMessage"></a>

```go
RequestMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#request_message KustoClusterManagedPrivateEndpoint#request_message}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.timeouts"></a>

```go
Timeouts KustoClusterManagedPrivateEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts">KustoClusterManagedPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#timeouts KustoClusterManagedPrivateEndpoint#timeouts}

---

### KustoClusterManagedPrivateEndpointTimeouts <a name="KustoClusterManagedPrivateEndpointTimeouts" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoclustermanagedprivateendpoint"

&kustoclustermanagedprivateendpoint.KustoClusterManagedPrivateEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#create KustoClusterManagedPrivateEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#delete KustoClusterManagedPrivateEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#read KustoClusterManagedPrivateEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#update KustoClusterManagedPrivateEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#create KustoClusterManagedPrivateEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#delete KustoClusterManagedPrivateEndpoint#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#read KustoClusterManagedPrivateEndpoint#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/kusto_cluster_managed_private_endpoint#update KustoClusterManagedPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoClusterManagedPrivateEndpointTimeoutsOutputReference <a name="KustoClusterManagedPrivateEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustoclustermanagedprivateendpoint"

kustoclustermanagedprivateendpoint.NewKustoClusterManagedPrivateEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KustoClusterManagedPrivateEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



