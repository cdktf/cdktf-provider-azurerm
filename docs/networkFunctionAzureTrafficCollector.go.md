# `networkFunctionAzureTrafficCollector` Submodule <a name="`networkFunctionAzureTrafficCollector` Submodule" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFunctionAzureTrafficCollector <a name="NetworkFunctionAzureTrafficCollector" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector azurerm_network_function_azure_traffic_collector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkfunctionazuretrafficcollector"

networkfunctionazuretrafficcollector.NewNetworkFunctionAzureTrafficCollector(scope Construct, id *string, config NetworkFunctionAzureTrafficCollectorConfig) NetworkFunctionAzureTrafficCollector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig">NetworkFunctionAzureTrafficCollectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig">NetworkFunctionAzureTrafficCollectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.putTimeouts"></a>

```go
func PutTimeouts(value NetworkFunctionAzureTrafficCollectorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkFunctionAzureTrafficCollector resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkfunctionazuretrafficcollector"

networkfunctionazuretrafficcollector.NetworkFunctionAzureTrafficCollector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkfunctionazuretrafficcollector"

networkfunctionazuretrafficcollector.NetworkFunctionAzureTrafficCollector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkfunctionazuretrafficcollector"

networkfunctionazuretrafficcollector.NetworkFunctionAzureTrafficCollector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkfunctionazuretrafficcollector"

networkfunctionazuretrafficcollector.NetworkFunctionAzureTrafficCollector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkFunctionAzureTrafficCollector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkFunctionAzureTrafficCollector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkFunctionAzureTrafficCollector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFunctionAzureTrafficCollector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.collectorPolicyIds">CollectorPolicyIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference">NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.virtualHubId">VirtualHubId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CollectorPolicyIds`<sup>Required</sup> <a name="CollectorPolicyIds" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.collectorPolicyIds"></a>

```go
func CollectorPolicyIds() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.timeouts"></a>

```go
func Timeouts() NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference">NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference</a>

---

##### `VirtualHubId`<sup>Required</sup> <a name="VirtualHubId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.virtualHubId"></a>

```go
func VirtualHubId() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFunctionAzureTrafficCollectorConfig <a name="NetworkFunctionAzureTrafficCollectorConfig" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkfunctionazuretrafficcollector"

&networkfunctionazuretrafficcollector.NetworkFunctionAzureTrafficCollectorConfig {
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
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#location NetworkFunctionAzureTrafficCollector#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#name NetworkFunctionAzureTrafficCollector#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#resource_group_name NetworkFunctionAzureTrafficCollector#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#id NetworkFunctionAzureTrafficCollector#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#tags NetworkFunctionAzureTrafficCollector#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#location NetworkFunctionAzureTrafficCollector#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#name NetworkFunctionAzureTrafficCollector#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#resource_group_name NetworkFunctionAzureTrafficCollector#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#id NetworkFunctionAzureTrafficCollector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#tags NetworkFunctionAzureTrafficCollector#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.timeouts"></a>

```go
Timeouts NetworkFunctionAzureTrafficCollectorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#timeouts NetworkFunctionAzureTrafficCollector#timeouts}

---

### NetworkFunctionAzureTrafficCollectorTimeouts <a name="NetworkFunctionAzureTrafficCollectorTimeouts" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkfunctionazuretrafficcollector"

&networkfunctionazuretrafficcollector.NetworkFunctionAzureTrafficCollectorTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#create NetworkFunctionAzureTrafficCollector#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#delete NetworkFunctionAzureTrafficCollector#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#read NetworkFunctionAzureTrafficCollector#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#update NetworkFunctionAzureTrafficCollector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#create NetworkFunctionAzureTrafficCollector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#delete NetworkFunctionAzureTrafficCollector#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#read NetworkFunctionAzureTrafficCollector#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/network_function_azure_traffic_collector#update NetworkFunctionAzureTrafficCollector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference <a name="NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkfunctionazuretrafficcollector"

networkfunctionazuretrafficcollector.NewNetworkFunctionAzureTrafficCollectorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



