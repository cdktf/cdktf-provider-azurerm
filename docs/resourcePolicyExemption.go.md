# `azurerm_resource_policy_exemption`

Refer to the Terraform Registory for docs: [`azurerm_resource_policy_exemption`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption).

# `resourcePolicyExemption` Submodule <a name="`resourcePolicyExemption` Submodule" id="@cdktf/provider-azurerm.resourcePolicyExemption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcePolicyExemption <a name="ResourcePolicyExemption" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption azurerm_resource_policy_exemption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/resourcepolicyexemption"

resourcepolicyexemption.NewResourcePolicyExemption(scope Construct, id *string, config ResourcePolicyExemptionConfig) ResourcePolicyExemption
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig">ResourcePolicyExemptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig">ResourcePolicyExemptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.resetExpiresOn">ResetExpiresOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.resetPolicyDefinitionReferenceIds">ResetPolicyDefinitionReferenceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.putTimeouts"></a>

```go
func PutTimeouts(value ResourcePolicyExemptionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeouts">ResourcePolicyExemptionTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetExpiresOn` <a name="ResetExpiresOn" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.resetExpiresOn"></a>

```go
func ResetExpiresOn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetPolicyDefinitionReferenceIds` <a name="ResetPolicyDefinitionReferenceIds" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.resetPolicyDefinitionReferenceIds"></a>

```go
func ResetPolicyDefinitionReferenceIds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ResourcePolicyExemption resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/resourcepolicyexemption"

resourcepolicyexemption.ResourcePolicyExemption_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/resourcepolicyexemption"

resourcepolicyexemption.ResourcePolicyExemption_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/resourcepolicyexemption"

resourcepolicyexemption.ResourcePolicyExemption_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/resourcepolicyexemption"

resourcepolicyexemption.ResourcePolicyExemption_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ResourcePolicyExemption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ResourcePolicyExemption to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ResourcePolicyExemption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ResourcePolicyExemption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference">ResourcePolicyExemptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.exemptionCategoryInput">ExemptionCategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.expiresOnInput">ExpiresOnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.policyAssignmentIdInput">PolicyAssignmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.policyDefinitionReferenceIdsInput">PolicyDefinitionReferenceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.exemptionCategory">ExemptionCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.expiresOn">ExpiresOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.policyAssignmentId">PolicyAssignmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.policyDefinitionReferenceIds">PolicyDefinitionReferenceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.timeouts"></a>

```go
func Timeouts() ResourcePolicyExemptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference">ResourcePolicyExemptionTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExemptionCategoryInput`<sup>Optional</sup> <a name="ExemptionCategoryInput" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.exemptionCategoryInput"></a>

```go
func ExemptionCategoryInput() *string
```

- *Type:* *string

---

##### `ExpiresOnInput`<sup>Optional</sup> <a name="ExpiresOnInput" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.expiresOnInput"></a>

```go
func ExpiresOnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyAssignmentIdInput`<sup>Optional</sup> <a name="PolicyAssignmentIdInput" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.policyAssignmentIdInput"></a>

```go
func PolicyAssignmentIdInput() *string
```

- *Type:* *string

---

##### `PolicyDefinitionReferenceIdsInput`<sup>Optional</sup> <a name="PolicyDefinitionReferenceIdsInput" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.policyDefinitionReferenceIdsInput"></a>

```go
func PolicyDefinitionReferenceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExemptionCategory`<sup>Required</sup> <a name="ExemptionCategory" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.exemptionCategory"></a>

```go
func ExemptionCategory() *string
```

- *Type:* *string

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.expiresOn"></a>

```go
func ExpiresOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyAssignmentId`<sup>Required</sup> <a name="PolicyAssignmentId" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.policyAssignmentId"></a>

```go
func PolicyAssignmentId() *string
```

- *Type:* *string

---

##### `PolicyDefinitionReferenceIds`<sup>Required</sup> <a name="PolicyDefinitionReferenceIds" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.policyDefinitionReferenceIds"></a>

```go
func PolicyDefinitionReferenceIds() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemption.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcePolicyExemptionConfig <a name="ResourcePolicyExemptionConfig" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/resourcepolicyexemption"

&resourcepolicyexemption.ResourcePolicyExemptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExemptionCategory: *string,
	Name: *string,
	PolicyAssignmentId: *string,
	ResourceId: *string,
	Description: *string,
	DisplayName: *string,
	ExpiresOn: *string,
	Id: *string,
	Metadata: *string,
	PolicyDefinitionReferenceIds: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.resourcePolicyExemption.ResourcePolicyExemptionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.exemptionCategory">ExemptionCategory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#exemption_category ResourcePolicyExemption#exemption_category}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#name ResourcePolicyExemption#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.policyAssignmentId">PolicyAssignmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#policy_assignment_id ResourcePolicyExemption#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#resource_id ResourcePolicyExemption#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#description ResourcePolicyExemption#description}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#display_name ResourcePolicyExemption#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.expiresOn">ExpiresOn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#expires_on ResourcePolicyExemption#expires_on}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#id ResourcePolicyExemption#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.metadata">Metadata</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#metadata ResourcePolicyExemption#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.policyDefinitionReferenceIds">PolicyDefinitionReferenceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#policy_definition_reference_ids ResourcePolicyExemption#policy_definition_reference_ids}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeouts">ResourcePolicyExemptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExemptionCategory`<sup>Required</sup> <a name="ExemptionCategory" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.exemptionCategory"></a>

```go
ExemptionCategory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#exemption_category ResourcePolicyExemption#exemption_category}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#name ResourcePolicyExemption#name}.

---

##### `PolicyAssignmentId`<sup>Required</sup> <a name="PolicyAssignmentId" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.policyAssignmentId"></a>

```go
PolicyAssignmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#policy_assignment_id ResourcePolicyExemption#policy_assignment_id}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#resource_id ResourcePolicyExemption#resource_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#description ResourcePolicyExemption#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#display_name ResourcePolicyExemption#display_name}.

---

##### `ExpiresOn`<sup>Optional</sup> <a name="ExpiresOn" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.expiresOn"></a>

```go
ExpiresOn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#expires_on ResourcePolicyExemption#expires_on}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#id ResourcePolicyExemption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#metadata ResourcePolicyExemption#metadata}.

---

##### `PolicyDefinitionReferenceIds`<sup>Optional</sup> <a name="PolicyDefinitionReferenceIds" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.policyDefinitionReferenceIds"></a>

```go
PolicyDefinitionReferenceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#policy_definition_reference_ids ResourcePolicyExemption#policy_definition_reference_ids}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionConfig.property.timeouts"></a>

```go
Timeouts ResourcePolicyExemptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeouts">ResourcePolicyExemptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#timeouts ResourcePolicyExemption#timeouts}

---

### ResourcePolicyExemptionTimeouts <a name="ResourcePolicyExemptionTimeouts" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/resourcepolicyexemption"

&resourcepolicyexemption.ResourcePolicyExemptionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#create ResourcePolicyExemption#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#delete ResourcePolicyExemption#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#read ResourcePolicyExemption#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#update ResourcePolicyExemption#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#create ResourcePolicyExemption#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#delete ResourcePolicyExemption#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#read ResourcePolicyExemption#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/resource_policy_exemption#update ResourcePolicyExemption#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourcePolicyExemptionTimeoutsOutputReference <a name="ResourcePolicyExemptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/resourcepolicyexemption"

resourcepolicyexemption.NewResourcePolicyExemptionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourcePolicyExemptionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourcePolicyExemption.ResourcePolicyExemptionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



