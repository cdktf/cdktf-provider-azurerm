# `mongoClusterFirewallRule` Submodule <a name="`mongoClusterFirewallRule` Submodule" id="@cdktf/provider-azurerm.mongoClusterFirewallRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongoClusterFirewallRule <a name="MongoClusterFirewallRule" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule azurerm_mongo_cluster_firewall_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mongoclusterfirewallrule"

mongoclusterfirewallrule.NewMongoClusterFirewallRule(scope Construct, id *string, config MongoClusterFirewallRuleConfig) MongoClusterFirewallRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig">MongoClusterFirewallRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig">MongoClusterFirewallRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.putTimeouts"></a>

```go
func PutTimeouts(value MongoClusterFirewallRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeouts">MongoClusterFirewallRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MongoClusterFirewallRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mongoclusterfirewallrule"

mongoclusterfirewallrule.MongoClusterFirewallRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mongoclusterfirewallrule"

mongoclusterfirewallrule.MongoClusterFirewallRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mongoclusterfirewallrule"

mongoclusterfirewallrule.MongoClusterFirewallRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mongoclusterfirewallrule"

mongoclusterfirewallrule.MongoClusterFirewallRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MongoClusterFirewallRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MongoClusterFirewallRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MongoClusterFirewallRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MongoClusterFirewallRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference">MongoClusterFirewallRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.endIpAddressInput">EndIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.mongoClusterIdInput">MongoClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.startIpAddressInput">StartIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.endIpAddress">EndIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.mongoClusterId">MongoClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.startIpAddress">StartIpAddress</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.timeouts"></a>

```go
func Timeouts() MongoClusterFirewallRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference">MongoClusterFirewallRuleTimeoutsOutputReference</a>

---

##### `EndIpAddressInput`<sup>Optional</sup> <a name="EndIpAddressInput" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.endIpAddressInput"></a>

```go
func EndIpAddressInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MongoClusterIdInput`<sup>Optional</sup> <a name="MongoClusterIdInput" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.mongoClusterIdInput"></a>

```go
func MongoClusterIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StartIpAddressInput`<sup>Optional</sup> <a name="StartIpAddressInput" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.startIpAddressInput"></a>

```go
func StartIpAddressInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EndIpAddress`<sup>Required</sup> <a name="EndIpAddress" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.endIpAddress"></a>

```go
func EndIpAddress() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MongoClusterId`<sup>Required</sup> <a name="MongoClusterId" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.mongoClusterId"></a>

```go
func MongoClusterId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StartIpAddress`<sup>Required</sup> <a name="StartIpAddress" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.startIpAddress"></a>

```go
func StartIpAddress() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MongoClusterFirewallRuleConfig <a name="MongoClusterFirewallRuleConfig" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mongoclusterfirewallrule"

&mongoclusterfirewallrule.MongoClusterFirewallRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EndIpAddress: *string,
	MongoClusterId: *string,
	Name: *string,
	StartIpAddress: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.endIpAddress">EndIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#end_ip_address MongoClusterFirewallRule#end_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.mongoClusterId">MongoClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#mongo_cluster_id MongoClusterFirewallRule#mongo_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#name MongoClusterFirewallRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.startIpAddress">StartIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#start_ip_address MongoClusterFirewallRule#start_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#id MongoClusterFirewallRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeouts">MongoClusterFirewallRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndIpAddress`<sup>Required</sup> <a name="EndIpAddress" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.endIpAddress"></a>

```go
EndIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#end_ip_address MongoClusterFirewallRule#end_ip_address}.

---

##### `MongoClusterId`<sup>Required</sup> <a name="MongoClusterId" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.mongoClusterId"></a>

```go
MongoClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#mongo_cluster_id MongoClusterFirewallRule#mongo_cluster_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#name MongoClusterFirewallRule#name}.

---

##### `StartIpAddress`<sup>Required</sup> <a name="StartIpAddress" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.startIpAddress"></a>

```go
StartIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#start_ip_address MongoClusterFirewallRule#start_ip_address}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#id MongoClusterFirewallRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleConfig.property.timeouts"></a>

```go
Timeouts MongoClusterFirewallRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeouts">MongoClusterFirewallRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#timeouts MongoClusterFirewallRule#timeouts}

---

### MongoClusterFirewallRuleTimeouts <a name="MongoClusterFirewallRuleTimeouts" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mongoclusterfirewallrule"

&mongoclusterfirewallrule.MongoClusterFirewallRuleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#create MongoClusterFirewallRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#delete MongoClusterFirewallRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#read MongoClusterFirewallRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#update MongoClusterFirewallRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#create MongoClusterFirewallRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#delete MongoClusterFirewallRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#read MongoClusterFirewallRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/mongo_cluster_firewall_rule#update MongoClusterFirewallRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MongoClusterFirewallRuleTimeoutsOutputReference <a name="MongoClusterFirewallRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mongoclusterfirewallrule"

mongoclusterfirewallrule.NewMongoClusterFirewallRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MongoClusterFirewallRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mongoClusterFirewallRule.MongoClusterFirewallRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



