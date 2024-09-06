# `policySetDefinition` Submodule <a name="`policySetDefinition` Submodule" id="@cdktf/provider-azurerm.policySetDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicySetDefinition <a name="PolicySetDefinition" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition azurerm_policy_set_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/policysetdefinition"

policysetdefinition.NewPolicySetDefinition(scope Construct, id *string, config PolicySetDefinitionConfig) PolicySetDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig">PolicySetDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig">PolicySetDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionGroup">PutPolicyDefinitionGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionReference">PutPolicyDefinitionReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetManagementGroupId">ResetManagementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetPolicyDefinitionGroup">ResetPolicyDefinitionGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicyDefinitionGroup` <a name="PutPolicyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionGroup"></a>

```go
func PutPolicyDefinitionGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPolicyDefinitionReference` <a name="PutPolicyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionReference"></a>

```go
func PutPolicyDefinitionReference(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionReference.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putTimeouts"></a>

```go
func PutTimeouts(value PolicySetDefinitionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetManagementGroupId` <a name="ResetManagementGroupId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetManagementGroupId"></a>

```go
func ResetManagementGroupId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetPolicyDefinitionGroup` <a name="ResetPolicyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetPolicyDefinitionGroup"></a>

```go
func ResetPolicyDefinitionGroup()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PolicySetDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/policysetdefinition"

policysetdefinition.PolicySetDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/policysetdefinition"

policysetdefinition.PolicySetDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/policysetdefinition"

policysetdefinition.PolicySetDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/policysetdefinition"

policysetdefinition.PolicySetDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PolicySetDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PolicySetDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PolicySetDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PolicySetDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionGroup">PolicyDefinitionGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList">PolicySetDefinitionPolicyDefinitionGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionReference">PolicyDefinitionReference</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList">PolicySetDefinitionPolicyDefinitionReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference">PolicySetDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.managementGroupIdInput">ManagementGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionGroupInput">PolicyDefinitionGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionReferenceInput">PolicyDefinitionReferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyTypeInput">PolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.managementGroupId">ManagementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyDefinitionGroup`<sup>Required</sup> <a name="PolicyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionGroup"></a>

```go
func PolicyDefinitionGroup() PolicySetDefinitionPolicyDefinitionGroupList
```

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList">PolicySetDefinitionPolicyDefinitionGroupList</a>

---

##### `PolicyDefinitionReference`<sup>Required</sup> <a name="PolicyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionReference"></a>

```go
func PolicyDefinitionReference() PolicySetDefinitionPolicyDefinitionReferenceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList">PolicySetDefinitionPolicyDefinitionReferenceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.timeouts"></a>

```go
func Timeouts() PolicySetDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference">PolicySetDefinitionTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagementGroupIdInput`<sup>Optional</sup> <a name="ManagementGroupIdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.managementGroupIdInput"></a>

```go
func ManagementGroupIdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `PolicyDefinitionGroupInput`<sup>Optional</sup> <a name="PolicyDefinitionGroupInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionGroupInput"></a>

```go
func PolicyDefinitionGroupInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyDefinitionReferenceInput`<sup>Optional</sup> <a name="PolicyDefinitionReferenceInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionReferenceInput"></a>

```go
func PolicyDefinitionReferenceInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyTypeInput"></a>

```go
func PolicyTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagementGroupId`<sup>Required</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.managementGroupId"></a>

```go
func ManagementGroupId() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicySetDefinitionConfig <a name="PolicySetDefinitionConfig" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/policysetdefinition"

&policysetdefinition.PolicySetDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Name: *string,
	PolicyDefinitionReference: interface{},
	PolicyType: *string,
	Description: *string,
	Id: *string,
	ManagementGroupId: *string,
	Metadata: *string,
	Parameters: *string,
	PolicyDefinitionGroup: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.policySetDefinition.PolicySetDefinitionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyDefinitionReference">PolicyDefinitionReference</a></code> | <code>interface{}</code> | policy_definition_reference block. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyType">PolicyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#policy_type PolicySetDefinition#policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#id PolicySetDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.managementGroupId">ManagementGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#management_group_id PolicySetDefinition#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.metadata">Metadata</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#metadata PolicySetDefinition#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.parameters">Parameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#parameters PolicySetDefinition#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyDefinitionGroup">PolicyDefinitionGroup</a></code> | <code>interface{}</code> | policy_definition_group block. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}.

---

##### `PolicyDefinitionReference`<sup>Required</sup> <a name="PolicyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyDefinitionReference"></a>

```go
PolicyDefinitionReference interface{}
```

- *Type:* interface{}

policy_definition_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#policy_definition_reference PolicySetDefinition#policy_definition_reference}

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyType"></a>

```go
PolicyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#policy_type PolicySetDefinition#policy_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#id PolicySetDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagementGroupId`<sup>Optional</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.managementGroupId"></a>

```go
ManagementGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#management_group_id PolicySetDefinition#management_group_id}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#metadata PolicySetDefinition#metadata}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#parameters PolicySetDefinition#parameters}.

---

##### `PolicyDefinitionGroup`<sup>Optional</sup> <a name="PolicyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyDefinitionGroup"></a>

```go
PolicyDefinitionGroup interface{}
```

- *Type:* interface{}

policy_definition_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#policy_definition_group PolicySetDefinition#policy_definition_group}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.timeouts"></a>

```go
Timeouts PolicySetDefinitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#timeouts PolicySetDefinition#timeouts}

---

### PolicySetDefinitionPolicyDefinitionGroup <a name="PolicySetDefinitionPolicyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/policysetdefinition"

&policysetdefinition.PolicySetDefinitionPolicyDefinitionGroup {
	Name: *string,
	AdditionalMetadataResourceId: *string,
	Category: *string,
	Description: *string,
	DisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.additionalMetadataResourceId">AdditionalMetadataResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#additional_metadata_resource_id PolicySetDefinition#additional_metadata_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#category PolicySetDefinition#category}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}.

---

##### `AdditionalMetadataResourceId`<sup>Optional</sup> <a name="AdditionalMetadataResourceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.additionalMetadataResourceId"></a>

```go
AdditionalMetadataResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#additional_metadata_resource_id PolicySetDefinition#additional_metadata_resource_id}.

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#category PolicySetDefinition#category}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}.

---

### PolicySetDefinitionPolicyDefinitionReference <a name="PolicySetDefinitionPolicyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/policysetdefinition"

&policysetdefinition.PolicySetDefinitionPolicyDefinitionReference {
	PolicyDefinitionId: *string,
	ParameterValues: *string,
	PolicyGroupNames: *[]*string,
	ReferenceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#policy_definition_id PolicySetDefinition#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.parameterValues">ParameterValues</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#parameter_values PolicySetDefinition#parameter_values}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.policyGroupNames">PolicyGroupNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#policy_group_names PolicySetDefinition#policy_group_names}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.referenceId">ReferenceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#reference_id PolicySetDefinition#reference_id}. |

---

##### `PolicyDefinitionId`<sup>Required</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.policyDefinitionId"></a>

```go
PolicyDefinitionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#policy_definition_id PolicySetDefinition#policy_definition_id}.

---

##### `ParameterValues`<sup>Optional</sup> <a name="ParameterValues" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.parameterValues"></a>

```go
ParameterValues *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#parameter_values PolicySetDefinition#parameter_values}.

---

##### `PolicyGroupNames`<sup>Optional</sup> <a name="PolicyGroupNames" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.policyGroupNames"></a>

```go
PolicyGroupNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#policy_group_names PolicySetDefinition#policy_group_names}.

---

##### `ReferenceId`<sup>Optional</sup> <a name="ReferenceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.referenceId"></a>

```go
ReferenceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#reference_id PolicySetDefinition#reference_id}.

---

### PolicySetDefinitionTimeouts <a name="PolicySetDefinitionTimeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/policysetdefinition"

&policysetdefinition.PolicySetDefinitionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#create PolicySetDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#delete PolicySetDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#read PolicySetDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#update PolicySetDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#create PolicySetDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#delete PolicySetDefinition#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#read PolicySetDefinition#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/policy_set_definition#update PolicySetDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicySetDefinitionPolicyDefinitionGroupList <a name="PolicySetDefinitionPolicyDefinitionGroupList" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/policysetdefinition"

policysetdefinition.NewPolicySetDefinitionPolicyDefinitionGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PolicySetDefinitionPolicyDefinitionGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.get"></a>

```go
func Get(index *f64) PolicySetDefinitionPolicyDefinitionGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicySetDefinitionPolicyDefinitionGroupOutputReference <a name="PolicySetDefinitionPolicyDefinitionGroupOutputReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/policysetdefinition"

policysetdefinition.NewPolicySetDefinitionPolicyDefinitionGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PolicySetDefinitionPolicyDefinitionGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetAdditionalMetadataResourceId">ResetAdditionalMetadataResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalMetadataResourceId` <a name="ResetAdditionalMetadataResourceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetAdditionalMetadataResourceId"></a>

```go
func ResetAdditionalMetadataResourceId()
```

##### `ResetCategory` <a name="ResetCategory" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceIdInput">AdditionalMetadataResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceId">AdditionalMetadataResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalMetadataResourceIdInput`<sup>Optional</sup> <a name="AdditionalMetadataResourceIdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceIdInput"></a>

```go
func AdditionalMetadataResourceIdInput() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AdditionalMetadataResourceId`<sup>Required</sup> <a name="AdditionalMetadataResourceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceId"></a>

```go
func AdditionalMetadataResourceId() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicySetDefinitionPolicyDefinitionReferenceList <a name="PolicySetDefinitionPolicyDefinitionReferenceList" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/policysetdefinition"

policysetdefinition.NewPolicySetDefinitionPolicyDefinitionReferenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PolicySetDefinitionPolicyDefinitionReferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.get"></a>

```go
func Get(index *f64) PolicySetDefinitionPolicyDefinitionReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicySetDefinitionPolicyDefinitionReferenceOutputReference <a name="PolicySetDefinitionPolicyDefinitionReferenceOutputReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/policysetdefinition"

policysetdefinition.NewPolicySetDefinitionPolicyDefinitionReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PolicySetDefinitionPolicyDefinitionReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetParameterValues">ResetParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetPolicyGroupNames">ResetPolicyGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetReferenceId">ResetReferenceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameterValues` <a name="ResetParameterValues" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetParameterValues"></a>

```go
func ResetParameterValues()
```

##### `ResetPolicyGroupNames` <a name="ResetPolicyGroupNames" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetPolicyGroupNames"></a>

```go
func ResetPolicyGroupNames()
```

##### `ResetReferenceId` <a name="ResetReferenceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetReferenceId"></a>

```go
func ResetReferenceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValuesInput">ParameterValuesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionIdInput">PolicyDefinitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNamesInput">PolicyGroupNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceIdInput">ReferenceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValues">ParameterValues</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNames">PolicyGroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceId">ReferenceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterValuesInput`<sup>Optional</sup> <a name="ParameterValuesInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValuesInput"></a>

```go
func ParameterValuesInput() *string
```

- *Type:* *string

---

##### `PolicyDefinitionIdInput`<sup>Optional</sup> <a name="PolicyDefinitionIdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionIdInput"></a>

```go
func PolicyDefinitionIdInput() *string
```

- *Type:* *string

---

##### `PolicyGroupNamesInput`<sup>Optional</sup> <a name="PolicyGroupNamesInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNamesInput"></a>

```go
func PolicyGroupNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReferenceIdInput`<sup>Optional</sup> <a name="ReferenceIdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceIdInput"></a>

```go
func ReferenceIdInput() *string
```

- *Type:* *string

---

##### `ParameterValues`<sup>Required</sup> <a name="ParameterValues" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValues"></a>

```go
func ParameterValues() *string
```

- *Type:* *string

---

##### `PolicyDefinitionId`<sup>Required</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionId"></a>

```go
func PolicyDefinitionId() *string
```

- *Type:* *string

---

##### `PolicyGroupNames`<sup>Required</sup> <a name="PolicyGroupNames" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNames"></a>

```go
func PolicyGroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `ReferenceId`<sup>Required</sup> <a name="ReferenceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceId"></a>

```go
func ReferenceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PolicySetDefinitionTimeoutsOutputReference <a name="PolicySetDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/policysetdefinition"

policysetdefinition.NewPolicySetDefinitionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PolicySetDefinitionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



