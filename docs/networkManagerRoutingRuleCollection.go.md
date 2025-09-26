# `networkManagerRoutingRuleCollection` Submodule <a name="`networkManagerRoutingRuleCollection` Submodule" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerRoutingRuleCollection <a name="NetworkManagerRoutingRuleCollection" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection azurerm_network_manager_routing_rule_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerroutingrulecollection"

networkmanagerroutingrulecollection.NewNetworkManagerRoutingRuleCollection(scope Construct, id *string, config NetworkManagerRoutingRuleCollectionConfig) NetworkManagerRoutingRuleCollection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig">NetworkManagerRoutingRuleCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig">NetworkManagerRoutingRuleCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetBgpRoutePropagationEnabled">ResetBgpRoutePropagationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.putTimeouts"></a>

```go
func PutTimeouts(value NetworkManagerRoutingRuleCollectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a>

---

##### `ResetBgpRoutePropagationEnabled` <a name="ResetBgpRoutePropagationEnabled" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetBgpRoutePropagationEnabled"></a>

```go
func ResetBgpRoutePropagationEnabled()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkManagerRoutingRuleCollection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerroutingrulecollection"

networkmanagerroutingrulecollection.NetworkManagerRoutingRuleCollection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerroutingrulecollection"

networkmanagerroutingrulecollection.NetworkManagerRoutingRuleCollection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerroutingrulecollection"

networkmanagerroutingrulecollection.NetworkManagerRoutingRuleCollection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerroutingrulecollection"

networkmanagerroutingrulecollection.NetworkManagerRoutingRuleCollection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkManagerRoutingRuleCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkManagerRoutingRuleCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkManagerRoutingRuleCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkManagerRoutingRuleCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference">NetworkManagerRoutingRuleCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.bgpRoutePropagationEnabledInput">BgpRoutePropagationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.networkGroupIdsInput">NetworkGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.routingConfigurationIdInput">RoutingConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.bgpRoutePropagationEnabled">BgpRoutePropagationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.networkGroupIds">NetworkGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.routingConfigurationId">RoutingConfigurationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.timeouts"></a>

```go
func Timeouts() NetworkManagerRoutingRuleCollectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference">NetworkManagerRoutingRuleCollectionTimeoutsOutputReference</a>

---

##### `BgpRoutePropagationEnabledInput`<sup>Optional</sup> <a name="BgpRoutePropagationEnabledInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.bgpRoutePropagationEnabledInput"></a>

```go
func BgpRoutePropagationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkGroupIdsInput`<sup>Optional</sup> <a name="NetworkGroupIdsInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.networkGroupIdsInput"></a>

```go
func NetworkGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoutingConfigurationIdInput`<sup>Optional</sup> <a name="RoutingConfigurationIdInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.routingConfigurationIdInput"></a>

```go
func RoutingConfigurationIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BgpRoutePropagationEnabled`<sup>Required</sup> <a name="BgpRoutePropagationEnabled" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.bgpRoutePropagationEnabled"></a>

```go
func BgpRoutePropagationEnabled() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkGroupIds`<sup>Required</sup> <a name="NetworkGroupIds" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.networkGroupIds"></a>

```go
func NetworkGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `RoutingConfigurationId`<sup>Required</sup> <a name="RoutingConfigurationId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.routingConfigurationId"></a>

```go
func RoutingConfigurationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerRoutingRuleCollectionConfig <a name="NetworkManagerRoutingRuleCollectionConfig" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerroutingrulecollection"

&networkmanagerroutingrulecollection.NetworkManagerRoutingRuleCollectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	NetworkGroupIds: *[]*string,
	RoutingConfigurationId: *string,
	BgpRoutePropagationEnabled: interface{},
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#name NetworkManagerRoutingRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.networkGroupIds">NetworkGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#network_group_ids NetworkManagerRoutingRuleCollection#network_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.routingConfigurationId">RoutingConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#routing_configuration_id NetworkManagerRoutingRuleCollection#routing_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.bgpRoutePropagationEnabled">BgpRoutePropagationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#bgp_route_propagation_enabled NetworkManagerRoutingRuleCollection#bgp_route_propagation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#description NetworkManagerRoutingRuleCollection#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#id NetworkManagerRoutingRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#name NetworkManagerRoutingRuleCollection#name}.

---

##### `NetworkGroupIds`<sup>Required</sup> <a name="NetworkGroupIds" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.networkGroupIds"></a>

```go
NetworkGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#network_group_ids NetworkManagerRoutingRuleCollection#network_group_ids}.

---

##### `RoutingConfigurationId`<sup>Required</sup> <a name="RoutingConfigurationId" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.routingConfigurationId"></a>

```go
RoutingConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#routing_configuration_id NetworkManagerRoutingRuleCollection#routing_configuration_id}.

---

##### `BgpRoutePropagationEnabled`<sup>Optional</sup> <a name="BgpRoutePropagationEnabled" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.bgpRoutePropagationEnabled"></a>

```go
BgpRoutePropagationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#bgp_route_propagation_enabled NetworkManagerRoutingRuleCollection#bgp_route_propagation_enabled}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#description NetworkManagerRoutingRuleCollection#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#id NetworkManagerRoutingRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionConfig.property.timeouts"></a>

```go
Timeouts NetworkManagerRoutingRuleCollectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts">NetworkManagerRoutingRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#timeouts NetworkManagerRoutingRuleCollection#timeouts}

---

### NetworkManagerRoutingRuleCollectionTimeouts <a name="NetworkManagerRoutingRuleCollectionTimeouts" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerroutingrulecollection"

&networkmanagerroutingrulecollection.NetworkManagerRoutingRuleCollectionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#create NetworkManagerRoutingRuleCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#delete NetworkManagerRoutingRuleCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#read NetworkManagerRoutingRuleCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#update NetworkManagerRoutingRuleCollection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#create NetworkManagerRoutingRuleCollection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#delete NetworkManagerRoutingRuleCollection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#read NetworkManagerRoutingRuleCollection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/network_manager_routing_rule_collection#update NetworkManagerRoutingRuleCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerRoutingRuleCollectionTimeoutsOutputReference <a name="NetworkManagerRoutingRuleCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerroutingrulecollection"

networkmanagerroutingrulecollection.NewNetworkManagerRoutingRuleCollectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkManagerRoutingRuleCollectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerRoutingRuleCollection.NetworkManagerRoutingRuleCollectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



