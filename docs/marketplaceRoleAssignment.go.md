# `azurerm_marketplace_role_assignment`

Refer to the Terraform Registory for docs: [`azurerm_marketplace_role_assignment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment).

# `marketplaceRoleAssignment` Submodule <a name="`marketplaceRoleAssignment` Submodule" id="@cdktf/provider-azurerm.marketplaceRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MarketplaceRoleAssignment <a name="MarketplaceRoleAssignment" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment azurerm_marketplace_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/marketplaceroleassignment"

marketplaceroleassignment.NewMarketplaceRoleAssignment(scope Construct, id *string, config MarketplaceRoleAssignmentConfig) MarketplaceRoleAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig">MarketplaceRoleAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig">MarketplaceRoleAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetConditionVersion">ResetConditionVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetDelegatedManagedIdentityResourceId">ResetDelegatedManagedIdentityResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetRoleDefinitionId">ResetRoleDefinitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetRoleDefinitionName">ResetRoleDefinitionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetSkipServicePrincipalAadCheck">ResetSkipServicePrincipalAadCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.putTimeouts"></a>

```go
func PutTimeouts(value MarketplaceRoleAssignmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetConditionVersion` <a name="ResetConditionVersion" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetConditionVersion"></a>

```go
func ResetConditionVersion()
```

##### `ResetDelegatedManagedIdentityResourceId` <a name="ResetDelegatedManagedIdentityResourceId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetDelegatedManagedIdentityResourceId"></a>

```go
func ResetDelegatedManagedIdentityResourceId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetName"></a>

```go
func ResetName()
```

##### `ResetRoleDefinitionId` <a name="ResetRoleDefinitionId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetRoleDefinitionId"></a>

```go
func ResetRoleDefinitionId()
```

##### `ResetRoleDefinitionName` <a name="ResetRoleDefinitionName" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetRoleDefinitionName"></a>

```go
func ResetRoleDefinitionName()
```

##### `ResetSkipServicePrincipalAadCheck` <a name="ResetSkipServicePrincipalAadCheck" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetSkipServicePrincipalAadCheck"></a>

```go
func ResetSkipServicePrincipalAadCheck()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MarketplaceRoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/marketplaceroleassignment"

marketplaceroleassignment.MarketplaceRoleAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/marketplaceroleassignment"

marketplaceroleassignment.MarketplaceRoleAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/marketplaceroleassignment"

marketplaceroleassignment.MarketplaceRoleAssignment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/marketplaceroleassignment"

marketplaceroleassignment.MarketplaceRoleAssignment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MarketplaceRoleAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MarketplaceRoleAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MarketplaceRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MarketplaceRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference">MarketplaceRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionVersionInput">ConditionVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.delegatedManagedIdentityResourceIdInput">DelegatedManagedIdentityResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalIdInput">PrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionIdInput">RoleDefinitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionNameInput">RoleDefinitionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.skipServicePrincipalAadCheckInput">SkipServicePrincipalAadCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionVersion">ConditionVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.delegatedManagedIdentityResourceId">DelegatedManagedIdentityResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionName">RoleDefinitionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.skipServicePrincipalAadCheck">SkipServicePrincipalAadCheck</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.timeouts"></a>

```go
func Timeouts() MarketplaceRoleAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference">MarketplaceRoleAssignmentTimeoutsOutputReference</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `ConditionVersionInput`<sup>Optional</sup> <a name="ConditionVersionInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionVersionInput"></a>

```go
func ConditionVersionInput() *string
```

- *Type:* *string

---

##### `DelegatedManagedIdentityResourceIdInput`<sup>Optional</sup> <a name="DelegatedManagedIdentityResourceIdInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.delegatedManagedIdentityResourceIdInput"></a>

```go
func DelegatedManagedIdentityResourceIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalIdInput"></a>

```go
func PrincipalIdInput() *string
```

- *Type:* *string

---

##### `RoleDefinitionIdInput`<sup>Optional</sup> <a name="RoleDefinitionIdInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionIdInput"></a>

```go
func RoleDefinitionIdInput() *string
```

- *Type:* *string

---

##### `RoleDefinitionNameInput`<sup>Optional</sup> <a name="RoleDefinitionNameInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionNameInput"></a>

```go
func RoleDefinitionNameInput() *string
```

- *Type:* *string

---

##### `SkipServicePrincipalAadCheckInput`<sup>Optional</sup> <a name="SkipServicePrincipalAadCheckInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.skipServicePrincipalAadCheckInput"></a>

```go
func SkipServicePrincipalAadCheckInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `ConditionVersion`<sup>Required</sup> <a name="ConditionVersion" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionVersion"></a>

```go
func ConditionVersion() *string
```

- *Type:* *string

---

##### `DelegatedManagedIdentityResourceId`<sup>Required</sup> <a name="DelegatedManagedIdentityResourceId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.delegatedManagedIdentityResourceId"></a>

```go
func DelegatedManagedIdentityResourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionId"></a>

```go
func RoleDefinitionId() *string
```

- *Type:* *string

---

##### `RoleDefinitionName`<sup>Required</sup> <a name="RoleDefinitionName" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionName"></a>

```go
func RoleDefinitionName() *string
```

- *Type:* *string

---

##### `SkipServicePrincipalAadCheck`<sup>Required</sup> <a name="SkipServicePrincipalAadCheck" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.skipServicePrincipalAadCheck"></a>

```go
func SkipServicePrincipalAadCheck() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MarketplaceRoleAssignmentConfig <a name="MarketplaceRoleAssignmentConfig" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/marketplaceroleassignment"

&marketplaceroleassignment.MarketplaceRoleAssignmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PrincipalId: *string,
	Condition: *string,
	ConditionVersion: *string,
	DelegatedManagedIdentityResourceId: *string,
	Description: *string,
	Id: *string,
	Name: *string,
	RoleDefinitionId: *string,
	RoleDefinitionName: *string,
	SkipServicePrincipalAadCheck: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.principalId">PrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#principal_id MarketplaceRoleAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#condition MarketplaceRoleAssignment#condition}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.conditionVersion">ConditionVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#condition_version MarketplaceRoleAssignment#condition_version}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.delegatedManagedIdentityResourceId">DelegatedManagedIdentityResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#delegated_managed_identity_resource_id MarketplaceRoleAssignment#delegated_managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#description MarketplaceRoleAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#id MarketplaceRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#name MarketplaceRoleAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#role_definition_id MarketplaceRoleAssignment#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.roleDefinitionName">RoleDefinitionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#role_definition_name MarketplaceRoleAssignment#role_definition_name}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.skipServicePrincipalAadCheck">SkipServicePrincipalAadCheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#skip_service_principal_aad_check MarketplaceRoleAssignment#skip_service_principal_aad_check}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.principalId"></a>

```go
PrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#principal_id MarketplaceRoleAssignment#principal_id}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#condition MarketplaceRoleAssignment#condition}.

---

##### `ConditionVersion`<sup>Optional</sup> <a name="ConditionVersion" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.conditionVersion"></a>

```go
ConditionVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#condition_version MarketplaceRoleAssignment#condition_version}.

---

##### `DelegatedManagedIdentityResourceId`<sup>Optional</sup> <a name="DelegatedManagedIdentityResourceId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.delegatedManagedIdentityResourceId"></a>

```go
DelegatedManagedIdentityResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#delegated_managed_identity_resource_id MarketplaceRoleAssignment#delegated_managed_identity_resource_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#description MarketplaceRoleAssignment#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#id MarketplaceRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#name MarketplaceRoleAssignment#name}.

---

##### `RoleDefinitionId`<sup>Optional</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.roleDefinitionId"></a>

```go
RoleDefinitionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#role_definition_id MarketplaceRoleAssignment#role_definition_id}.

---

##### `RoleDefinitionName`<sup>Optional</sup> <a name="RoleDefinitionName" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.roleDefinitionName"></a>

```go
RoleDefinitionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#role_definition_name MarketplaceRoleAssignment#role_definition_name}.

---

##### `SkipServicePrincipalAadCheck`<sup>Optional</sup> <a name="SkipServicePrincipalAadCheck" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.skipServicePrincipalAadCheck"></a>

```go
SkipServicePrincipalAadCheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#skip_service_principal_aad_check MarketplaceRoleAssignment#skip_service_principal_aad_check}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.timeouts"></a>

```go
Timeouts MarketplaceRoleAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#timeouts MarketplaceRoleAssignment#timeouts}

---

### MarketplaceRoleAssignmentTimeouts <a name="MarketplaceRoleAssignmentTimeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/marketplaceroleassignment"

&marketplaceroleassignment.MarketplaceRoleAssignmentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#create MarketplaceRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#delete MarketplaceRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#read MarketplaceRoleAssignment#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#create MarketplaceRoleAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#delete MarketplaceRoleAssignment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/marketplace_role_assignment#read MarketplaceRoleAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MarketplaceRoleAssignmentTimeoutsOutputReference <a name="MarketplaceRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/marketplaceroleassignment"

marketplaceroleassignment.NewMarketplaceRoleAssignmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MarketplaceRoleAssignmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



