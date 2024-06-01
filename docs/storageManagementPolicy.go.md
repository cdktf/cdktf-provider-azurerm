# `storageManagementPolicy` Submodule <a name="`storageManagementPolicy` Submodule" id="@cdktf/provider-azurerm.storageManagementPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageManagementPolicy <a name="StorageManagementPolicy" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy azurerm_storage_management_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

storagemanagementpolicy.NewStorageManagementPolicy(scope Construct, id *string, config StorageManagementPolicyConfig) StorageManagementPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig">StorageManagementPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig">StorageManagementPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.putTimeouts"></a>

```go
func PutTimeouts(value StorageManagementPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts">StorageManagementPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.resetRule"></a>

```go
func ResetRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageManagementPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

storagemanagementpolicy.StorageManagementPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

storagemanagementpolicy.StorageManagementPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

storagemanagementpolicy.StorageManagementPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

storagemanagementpolicy.StorageManagementPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StorageManagementPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageManagementPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageManagementPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StorageManagementPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList">StorageManagementPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference">StorageManagementPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.rule"></a>

```go
func Rule() StorageManagementPolicyRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList">StorageManagementPolicyRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.timeouts"></a>

```go
func Timeouts() StorageManagementPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference">StorageManagementPolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageManagementPolicyConfig <a name="StorageManagementPolicyConfig" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

&storagemanagementpolicy.StorageManagementPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StorageAccountId: *string,
	Id: *string,
	Rule: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.storageManagementPolicy.StorageManagementPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#storage_account_id StorageManagementPolicy#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#id StorageManagementPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts">StorageManagementPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#storage_account_id StorageManagementPolicy#storage_account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#id StorageManagementPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#rule StorageManagementPolicy#rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.timeouts"></a>

```go
Timeouts StorageManagementPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts">StorageManagementPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#timeouts StorageManagementPolicy#timeouts}

---

### StorageManagementPolicyRule <a name="StorageManagementPolicyRule" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

&storagemanagementpolicy.StorageManagementPolicyRule {
	Actions: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.storageManagementPolicy.StorageManagementPolicyRuleActions,
	Enabled: interface{},
	Filters: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.storageManagementPolicy.StorageManagementPolicyRuleFilters,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions">StorageManagementPolicyRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#enabled StorageManagementPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters">StorageManagementPolicyRuleFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#name StorageManagementPolicy#name}. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.property.actions"></a>

```go
Actions StorageManagementPolicyRuleActions
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions">StorageManagementPolicyRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#actions StorageManagementPolicy#actions}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#enabled StorageManagementPolicy#enabled}.

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.property.filters"></a>

```go
Filters StorageManagementPolicyRuleFilters
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters">StorageManagementPolicyRuleFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#filters StorageManagementPolicy#filters}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#name StorageManagementPolicy#name}.

---

### StorageManagementPolicyRuleActions <a name="StorageManagementPolicyRuleActions" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

&storagemanagementpolicy.StorageManagementPolicyRuleActions {
	BaseBlob: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob,
	Snapshot: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot,
	Version: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions.property.baseBlob">BaseBlob</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob">StorageManagementPolicyRuleActionsBaseBlob</a></code> | base_blob block. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot">StorageManagementPolicyRuleActionsSnapshot</a></code> | snapshot block. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions.property.version">Version</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion">StorageManagementPolicyRuleActionsVersion</a></code> | version block. |

---

##### `BaseBlob`<sup>Optional</sup> <a name="BaseBlob" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions.property.baseBlob"></a>

```go
BaseBlob StorageManagementPolicyRuleActionsBaseBlob
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob">StorageManagementPolicyRuleActionsBaseBlob</a>

base_blob block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#base_blob StorageManagementPolicy#base_blob}

---

##### `Snapshot`<sup>Optional</sup> <a name="Snapshot" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions.property.snapshot"></a>

```go
Snapshot StorageManagementPolicyRuleActionsSnapshot
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot">StorageManagementPolicyRuleActionsSnapshot</a>

snapshot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#snapshot StorageManagementPolicy#snapshot}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions.property.version"></a>

```go
Version StorageManagementPolicyRuleActionsVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion">StorageManagementPolicyRuleActionsVersion</a>

version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#version StorageManagementPolicy#version}

---

### StorageManagementPolicyRuleActionsBaseBlob <a name="StorageManagementPolicyRuleActionsBaseBlob" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

&storagemanagementpolicy.StorageManagementPolicyRuleActionsBaseBlob {
	AutoTierToHotFromCoolEnabled: interface{},
	DeleteAfterDaysSinceCreationGreaterThan: *f64,
	DeleteAfterDaysSinceLastAccessTimeGreaterThan: *f64,
	DeleteAfterDaysSinceModificationGreaterThan: *f64,
	TierToArchiveAfterDaysSinceCreationGreaterThan: *f64,
	TierToArchiveAfterDaysSinceLastAccessTimeGreaterThan: *f64,
	TierToArchiveAfterDaysSinceLastTierChangeGreaterThan: *f64,
	TierToArchiveAfterDaysSinceModificationGreaterThan: *f64,
	TierToColdAfterDaysSinceCreationGreaterThan: *f64,
	TierToColdAfterDaysSinceLastAccessTimeGreaterThan: *f64,
	TierToColdAfterDaysSinceModificationGreaterThan: *f64,
	TierToCoolAfterDaysSinceCreationGreaterThan: *f64,
	TierToCoolAfterDaysSinceLastAccessTimeGreaterThan: *f64,
	TierToCoolAfterDaysSinceModificationGreaterThan: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.autoTierToHotFromCoolEnabled">AutoTierToHotFromCoolEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#auto_tier_to_hot_from_cool_enabled StorageManagementPolicy#auto_tier_to_hot_from_cool_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.deleteAfterDaysSinceCreationGreaterThan">DeleteAfterDaysSinceCreationGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#delete_after_days_since_creation_greater_than StorageManagementPolicy#delete_after_days_since_creation_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.deleteAfterDaysSinceLastAccessTimeGreaterThan">DeleteAfterDaysSinceLastAccessTimeGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#delete_after_days_since_last_access_time_greater_than StorageManagementPolicy#delete_after_days_since_last_access_time_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.deleteAfterDaysSinceModificationGreaterThan">DeleteAfterDaysSinceModificationGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#delete_after_days_since_modification_greater_than StorageManagementPolicy#delete_after_days_since_modification_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToArchiveAfterDaysSinceCreationGreaterThan">TierToArchiveAfterDaysSinceCreationGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_archive_after_days_since_creation_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_creation_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan">TierToArchiveAfterDaysSinceLastAccessTimeGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_archive_after_days_since_last_access_time_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_access_time_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">TierToArchiveAfterDaysSinceLastTierChangeGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_archive_after_days_since_last_tier_change_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_tier_change_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToArchiveAfterDaysSinceModificationGreaterThan">TierToArchiveAfterDaysSinceModificationGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_archive_after_days_since_modification_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_modification_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToColdAfterDaysSinceCreationGreaterThan">TierToColdAfterDaysSinceCreationGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_cold_after_days_since_creation_greater_than StorageManagementPolicy#tier_to_cold_after_days_since_creation_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToColdAfterDaysSinceLastAccessTimeGreaterThan">TierToColdAfterDaysSinceLastAccessTimeGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_cold_after_days_since_last_access_time_greater_than StorageManagementPolicy#tier_to_cold_after_days_since_last_access_time_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToColdAfterDaysSinceModificationGreaterThan">TierToColdAfterDaysSinceModificationGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_cold_after_days_since_modification_greater_than StorageManagementPolicy#tier_to_cold_after_days_since_modification_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToCoolAfterDaysSinceCreationGreaterThan">TierToCoolAfterDaysSinceCreationGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_cool_after_days_since_creation_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_creation_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToCoolAfterDaysSinceLastAccessTimeGreaterThan">TierToCoolAfterDaysSinceLastAccessTimeGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_cool_after_days_since_last_access_time_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_last_access_time_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToCoolAfterDaysSinceModificationGreaterThan">TierToCoolAfterDaysSinceModificationGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_cool_after_days_since_modification_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_modification_greater_than}. |

---

##### `AutoTierToHotFromCoolEnabled`<sup>Optional</sup> <a name="AutoTierToHotFromCoolEnabled" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.autoTierToHotFromCoolEnabled"></a>

```go
AutoTierToHotFromCoolEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#auto_tier_to_hot_from_cool_enabled StorageManagementPolicy#auto_tier_to_hot_from_cool_enabled}.

---

##### `DeleteAfterDaysSinceCreationGreaterThan`<sup>Optional</sup> <a name="DeleteAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.deleteAfterDaysSinceCreationGreaterThan"></a>

```go
DeleteAfterDaysSinceCreationGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#delete_after_days_since_creation_greater_than StorageManagementPolicy#delete_after_days_since_creation_greater_than}.

---

##### `DeleteAfterDaysSinceLastAccessTimeGreaterThan`<sup>Optional</sup> <a name="DeleteAfterDaysSinceLastAccessTimeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.deleteAfterDaysSinceLastAccessTimeGreaterThan"></a>

```go
DeleteAfterDaysSinceLastAccessTimeGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#delete_after_days_since_last_access_time_greater_than StorageManagementPolicy#delete_after_days_since_last_access_time_greater_than}.

---

##### `DeleteAfterDaysSinceModificationGreaterThan`<sup>Optional</sup> <a name="DeleteAfterDaysSinceModificationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.deleteAfterDaysSinceModificationGreaterThan"></a>

```go
DeleteAfterDaysSinceModificationGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#delete_after_days_since_modification_greater_than StorageManagementPolicy#delete_after_days_since_modification_greater_than}.

---

##### `TierToArchiveAfterDaysSinceCreationGreaterThan`<sup>Optional</sup> <a name="TierToArchiveAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToArchiveAfterDaysSinceCreationGreaterThan"></a>

```go
TierToArchiveAfterDaysSinceCreationGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_archive_after_days_since_creation_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_creation_greater_than}.

---

##### `TierToArchiveAfterDaysSinceLastAccessTimeGreaterThan`<sup>Optional</sup> <a name="TierToArchiveAfterDaysSinceLastAccessTimeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan"></a>

```go
TierToArchiveAfterDaysSinceLastAccessTimeGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_archive_after_days_since_last_access_time_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_access_time_greater_than}.

---

##### `TierToArchiveAfterDaysSinceLastTierChangeGreaterThan`<sup>Optional</sup> <a name="TierToArchiveAfterDaysSinceLastTierChangeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```go
TierToArchiveAfterDaysSinceLastTierChangeGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_archive_after_days_since_last_tier_change_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_tier_change_greater_than}.

---

##### `TierToArchiveAfterDaysSinceModificationGreaterThan`<sup>Optional</sup> <a name="TierToArchiveAfterDaysSinceModificationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToArchiveAfterDaysSinceModificationGreaterThan"></a>

```go
TierToArchiveAfterDaysSinceModificationGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_archive_after_days_since_modification_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_modification_greater_than}.

---

##### `TierToColdAfterDaysSinceCreationGreaterThan`<sup>Optional</sup> <a name="TierToColdAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToColdAfterDaysSinceCreationGreaterThan"></a>

```go
TierToColdAfterDaysSinceCreationGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_cold_after_days_since_creation_greater_than StorageManagementPolicy#tier_to_cold_after_days_since_creation_greater_than}.

---

##### `TierToColdAfterDaysSinceLastAccessTimeGreaterThan`<sup>Optional</sup> <a name="TierToColdAfterDaysSinceLastAccessTimeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToColdAfterDaysSinceLastAccessTimeGreaterThan"></a>

```go
TierToColdAfterDaysSinceLastAccessTimeGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_cold_after_days_since_last_access_time_greater_than StorageManagementPolicy#tier_to_cold_after_days_since_last_access_time_greater_than}.

---

##### `TierToColdAfterDaysSinceModificationGreaterThan`<sup>Optional</sup> <a name="TierToColdAfterDaysSinceModificationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToColdAfterDaysSinceModificationGreaterThan"></a>

```go
TierToColdAfterDaysSinceModificationGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_cold_after_days_since_modification_greater_than StorageManagementPolicy#tier_to_cold_after_days_since_modification_greater_than}.

---

##### `TierToCoolAfterDaysSinceCreationGreaterThan`<sup>Optional</sup> <a name="TierToCoolAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToCoolAfterDaysSinceCreationGreaterThan"></a>

```go
TierToCoolAfterDaysSinceCreationGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_cool_after_days_since_creation_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_creation_greater_than}.

---

##### `TierToCoolAfterDaysSinceLastAccessTimeGreaterThan`<sup>Optional</sup> <a name="TierToCoolAfterDaysSinceLastAccessTimeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToCoolAfterDaysSinceLastAccessTimeGreaterThan"></a>

```go
TierToCoolAfterDaysSinceLastAccessTimeGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_cool_after_days_since_last_access_time_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_last_access_time_greater_than}.

---

##### `TierToCoolAfterDaysSinceModificationGreaterThan`<sup>Optional</sup> <a name="TierToCoolAfterDaysSinceModificationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToCoolAfterDaysSinceModificationGreaterThan"></a>

```go
TierToCoolAfterDaysSinceModificationGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_cool_after_days_since_modification_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_modification_greater_than}.

---

### StorageManagementPolicyRuleActionsSnapshot <a name="StorageManagementPolicyRuleActionsSnapshot" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

&storagemanagementpolicy.StorageManagementPolicyRuleActionsSnapshot {
	ChangeTierToArchiveAfterDaysSinceCreation: *f64,
	ChangeTierToCoolAfterDaysSinceCreation: *f64,
	DeleteAfterDaysSinceCreationGreaterThan: *f64,
	TierToArchiveAfterDaysSinceLastTierChangeGreaterThan: *f64,
	TierToColdAfterDaysSinceCreationGreaterThan: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.changeTierToArchiveAfterDaysSinceCreation">ChangeTierToArchiveAfterDaysSinceCreation</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#change_tier_to_archive_after_days_since_creation StorageManagementPolicy#change_tier_to_archive_after_days_since_creation}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.changeTierToCoolAfterDaysSinceCreation">ChangeTierToCoolAfterDaysSinceCreation</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#change_tier_to_cool_after_days_since_creation StorageManagementPolicy#change_tier_to_cool_after_days_since_creation}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.deleteAfterDaysSinceCreationGreaterThan">DeleteAfterDaysSinceCreationGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#delete_after_days_since_creation_greater_than StorageManagementPolicy#delete_after_days_since_creation_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">TierToArchiveAfterDaysSinceLastTierChangeGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_archive_after_days_since_last_tier_change_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_tier_change_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.tierToColdAfterDaysSinceCreationGreaterThan">TierToColdAfterDaysSinceCreationGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_cold_after_days_since_creation_greater_than StorageManagementPolicy#tier_to_cold_after_days_since_creation_greater_than}. |

---

##### `ChangeTierToArchiveAfterDaysSinceCreation`<sup>Optional</sup> <a name="ChangeTierToArchiveAfterDaysSinceCreation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.changeTierToArchiveAfterDaysSinceCreation"></a>

```go
ChangeTierToArchiveAfterDaysSinceCreation *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#change_tier_to_archive_after_days_since_creation StorageManagementPolicy#change_tier_to_archive_after_days_since_creation}.

---

##### `ChangeTierToCoolAfterDaysSinceCreation`<sup>Optional</sup> <a name="ChangeTierToCoolAfterDaysSinceCreation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.changeTierToCoolAfterDaysSinceCreation"></a>

```go
ChangeTierToCoolAfterDaysSinceCreation *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#change_tier_to_cool_after_days_since_creation StorageManagementPolicy#change_tier_to_cool_after_days_since_creation}.

---

##### `DeleteAfterDaysSinceCreationGreaterThan`<sup>Optional</sup> <a name="DeleteAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.deleteAfterDaysSinceCreationGreaterThan"></a>

```go
DeleteAfterDaysSinceCreationGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#delete_after_days_since_creation_greater_than StorageManagementPolicy#delete_after_days_since_creation_greater_than}.

---

##### `TierToArchiveAfterDaysSinceLastTierChangeGreaterThan`<sup>Optional</sup> <a name="TierToArchiveAfterDaysSinceLastTierChangeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```go
TierToArchiveAfterDaysSinceLastTierChangeGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_archive_after_days_since_last_tier_change_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_tier_change_greater_than}.

---

##### `TierToColdAfterDaysSinceCreationGreaterThan`<sup>Optional</sup> <a name="TierToColdAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.tierToColdAfterDaysSinceCreationGreaterThan"></a>

```go
TierToColdAfterDaysSinceCreationGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_cold_after_days_since_creation_greater_than StorageManagementPolicy#tier_to_cold_after_days_since_creation_greater_than}.

---

### StorageManagementPolicyRuleActionsVersion <a name="StorageManagementPolicyRuleActionsVersion" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

&storagemanagementpolicy.StorageManagementPolicyRuleActionsVersion {
	ChangeTierToArchiveAfterDaysSinceCreation: *f64,
	ChangeTierToCoolAfterDaysSinceCreation: *f64,
	DeleteAfterDaysSinceCreation: *f64,
	TierToArchiveAfterDaysSinceLastTierChangeGreaterThan: *f64,
	TierToColdAfterDaysSinceCreationGreaterThan: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.changeTierToArchiveAfterDaysSinceCreation">ChangeTierToArchiveAfterDaysSinceCreation</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#change_tier_to_archive_after_days_since_creation StorageManagementPolicy#change_tier_to_archive_after_days_since_creation}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.changeTierToCoolAfterDaysSinceCreation">ChangeTierToCoolAfterDaysSinceCreation</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#change_tier_to_cool_after_days_since_creation StorageManagementPolicy#change_tier_to_cool_after_days_since_creation}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.deleteAfterDaysSinceCreation">DeleteAfterDaysSinceCreation</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#delete_after_days_since_creation StorageManagementPolicy#delete_after_days_since_creation}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">TierToArchiveAfterDaysSinceLastTierChangeGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_archive_after_days_since_last_tier_change_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_tier_change_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.tierToColdAfterDaysSinceCreationGreaterThan">TierToColdAfterDaysSinceCreationGreaterThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_cold_after_days_since_creation_greater_than StorageManagementPolicy#tier_to_cold_after_days_since_creation_greater_than}. |

---

##### `ChangeTierToArchiveAfterDaysSinceCreation`<sup>Optional</sup> <a name="ChangeTierToArchiveAfterDaysSinceCreation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.changeTierToArchiveAfterDaysSinceCreation"></a>

```go
ChangeTierToArchiveAfterDaysSinceCreation *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#change_tier_to_archive_after_days_since_creation StorageManagementPolicy#change_tier_to_archive_after_days_since_creation}.

---

##### `ChangeTierToCoolAfterDaysSinceCreation`<sup>Optional</sup> <a name="ChangeTierToCoolAfterDaysSinceCreation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.changeTierToCoolAfterDaysSinceCreation"></a>

```go
ChangeTierToCoolAfterDaysSinceCreation *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#change_tier_to_cool_after_days_since_creation StorageManagementPolicy#change_tier_to_cool_after_days_since_creation}.

---

##### `DeleteAfterDaysSinceCreation`<sup>Optional</sup> <a name="DeleteAfterDaysSinceCreation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.deleteAfterDaysSinceCreation"></a>

```go
DeleteAfterDaysSinceCreation *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#delete_after_days_since_creation StorageManagementPolicy#delete_after_days_since_creation}.

---

##### `TierToArchiveAfterDaysSinceLastTierChangeGreaterThan`<sup>Optional</sup> <a name="TierToArchiveAfterDaysSinceLastTierChangeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```go
TierToArchiveAfterDaysSinceLastTierChangeGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_archive_after_days_since_last_tier_change_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_tier_change_greater_than}.

---

##### `TierToColdAfterDaysSinceCreationGreaterThan`<sup>Optional</sup> <a name="TierToColdAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.tierToColdAfterDaysSinceCreationGreaterThan"></a>

```go
TierToColdAfterDaysSinceCreationGreaterThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#tier_to_cold_after_days_since_creation_greater_than StorageManagementPolicy#tier_to_cold_after_days_since_creation_greater_than}.

---

### StorageManagementPolicyRuleFilters <a name="StorageManagementPolicyRuleFilters" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

&storagemanagementpolicy.StorageManagementPolicyRuleFilters {
	BlobTypes: *[]*string,
	MatchBlobIndexTag: interface{},
	PrefixMatch: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters.property.blobTypes">BlobTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#blob_types StorageManagementPolicy#blob_types}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters.property.matchBlobIndexTag">MatchBlobIndexTag</a></code> | <code>interface{}</code> | match_blob_index_tag block. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters.property.prefixMatch">PrefixMatch</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#prefix_match StorageManagementPolicy#prefix_match}. |

---

##### `BlobTypes`<sup>Required</sup> <a name="BlobTypes" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters.property.blobTypes"></a>

```go
BlobTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#blob_types StorageManagementPolicy#blob_types}.

---

##### `MatchBlobIndexTag`<sup>Optional</sup> <a name="MatchBlobIndexTag" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters.property.matchBlobIndexTag"></a>

```go
MatchBlobIndexTag interface{}
```

- *Type:* interface{}

match_blob_index_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#match_blob_index_tag StorageManagementPolicy#match_blob_index_tag}

---

##### `PrefixMatch`<sup>Optional</sup> <a name="PrefixMatch" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters.property.prefixMatch"></a>

```go
PrefixMatch *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#prefix_match StorageManagementPolicy#prefix_match}.

---

### StorageManagementPolicyRuleFiltersMatchBlobIndexTag <a name="StorageManagementPolicyRuleFiltersMatchBlobIndexTag" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

&storagemanagementpolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag {
	Name: *string,
	Value: *string,
	Operation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#name StorageManagementPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#value StorageManagementPolicy#value}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag.property.operation">Operation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#operation StorageManagementPolicy#operation}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#name StorageManagementPolicy#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#value StorageManagementPolicy#value}.

---

##### `Operation`<sup>Optional</sup> <a name="Operation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag.property.operation"></a>

```go
Operation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#operation StorageManagementPolicy#operation}.

---

### StorageManagementPolicyTimeouts <a name="StorageManagementPolicyTimeouts" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

&storagemanagementpolicy.StorageManagementPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#create StorageManagementPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#delete StorageManagementPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#read StorageManagementPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#update StorageManagementPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#create StorageManagementPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#delete StorageManagementPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#read StorageManagementPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/storage_management_policy#update StorageManagementPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageManagementPolicyRuleActionsBaseBlobOutputReference <a name="StorageManagementPolicyRuleActionsBaseBlobOutputReference" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

storagemanagementpolicy.NewStorageManagementPolicyRuleActionsBaseBlobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageManagementPolicyRuleActionsBaseBlobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetAutoTierToHotFromCoolEnabled">ResetAutoTierToHotFromCoolEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetDeleteAfterDaysSinceCreationGreaterThan">ResetDeleteAfterDaysSinceCreationGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetDeleteAfterDaysSinceLastAccessTimeGreaterThan">ResetDeleteAfterDaysSinceLastAccessTimeGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetDeleteAfterDaysSinceModificationGreaterThan">ResetDeleteAfterDaysSinceModificationGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToArchiveAfterDaysSinceCreationGreaterThan">ResetTierToArchiveAfterDaysSinceCreationGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToArchiveAfterDaysSinceLastAccessTimeGreaterThan">ResetTierToArchiveAfterDaysSinceLastAccessTimeGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan">ResetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToArchiveAfterDaysSinceModificationGreaterThan">ResetTierToArchiveAfterDaysSinceModificationGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToColdAfterDaysSinceCreationGreaterThan">ResetTierToColdAfterDaysSinceCreationGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToColdAfterDaysSinceLastAccessTimeGreaterThan">ResetTierToColdAfterDaysSinceLastAccessTimeGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToColdAfterDaysSinceModificationGreaterThan">ResetTierToColdAfterDaysSinceModificationGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToCoolAfterDaysSinceCreationGreaterThan">ResetTierToCoolAfterDaysSinceCreationGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToCoolAfterDaysSinceLastAccessTimeGreaterThan">ResetTierToCoolAfterDaysSinceLastAccessTimeGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToCoolAfterDaysSinceModificationGreaterThan">ResetTierToCoolAfterDaysSinceModificationGreaterThan</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoTierToHotFromCoolEnabled` <a name="ResetAutoTierToHotFromCoolEnabled" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetAutoTierToHotFromCoolEnabled"></a>

```go
func ResetAutoTierToHotFromCoolEnabled()
```

##### `ResetDeleteAfterDaysSinceCreationGreaterThan` <a name="ResetDeleteAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetDeleteAfterDaysSinceCreationGreaterThan"></a>

```go
func ResetDeleteAfterDaysSinceCreationGreaterThan()
```

##### `ResetDeleteAfterDaysSinceLastAccessTimeGreaterThan` <a name="ResetDeleteAfterDaysSinceLastAccessTimeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetDeleteAfterDaysSinceLastAccessTimeGreaterThan"></a>

```go
func ResetDeleteAfterDaysSinceLastAccessTimeGreaterThan()
```

##### `ResetDeleteAfterDaysSinceModificationGreaterThan` <a name="ResetDeleteAfterDaysSinceModificationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetDeleteAfterDaysSinceModificationGreaterThan"></a>

```go
func ResetDeleteAfterDaysSinceModificationGreaterThan()
```

##### `ResetTierToArchiveAfterDaysSinceCreationGreaterThan` <a name="ResetTierToArchiveAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToArchiveAfterDaysSinceCreationGreaterThan"></a>

```go
func ResetTierToArchiveAfterDaysSinceCreationGreaterThan()
```

##### `ResetTierToArchiveAfterDaysSinceLastAccessTimeGreaterThan` <a name="ResetTierToArchiveAfterDaysSinceLastAccessTimeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToArchiveAfterDaysSinceLastAccessTimeGreaterThan"></a>

```go
func ResetTierToArchiveAfterDaysSinceLastAccessTimeGreaterThan()
```

##### `ResetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan` <a name="ResetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```go
func ResetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan()
```

##### `ResetTierToArchiveAfterDaysSinceModificationGreaterThan` <a name="ResetTierToArchiveAfterDaysSinceModificationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToArchiveAfterDaysSinceModificationGreaterThan"></a>

```go
func ResetTierToArchiveAfterDaysSinceModificationGreaterThan()
```

##### `ResetTierToColdAfterDaysSinceCreationGreaterThan` <a name="ResetTierToColdAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToColdAfterDaysSinceCreationGreaterThan"></a>

```go
func ResetTierToColdAfterDaysSinceCreationGreaterThan()
```

##### `ResetTierToColdAfterDaysSinceLastAccessTimeGreaterThan` <a name="ResetTierToColdAfterDaysSinceLastAccessTimeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToColdAfterDaysSinceLastAccessTimeGreaterThan"></a>

```go
func ResetTierToColdAfterDaysSinceLastAccessTimeGreaterThan()
```

##### `ResetTierToColdAfterDaysSinceModificationGreaterThan` <a name="ResetTierToColdAfterDaysSinceModificationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToColdAfterDaysSinceModificationGreaterThan"></a>

```go
func ResetTierToColdAfterDaysSinceModificationGreaterThan()
```

##### `ResetTierToCoolAfterDaysSinceCreationGreaterThan` <a name="ResetTierToCoolAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToCoolAfterDaysSinceCreationGreaterThan"></a>

```go
func ResetTierToCoolAfterDaysSinceCreationGreaterThan()
```

##### `ResetTierToCoolAfterDaysSinceLastAccessTimeGreaterThan` <a name="ResetTierToCoolAfterDaysSinceLastAccessTimeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToCoolAfterDaysSinceLastAccessTimeGreaterThan"></a>

```go
func ResetTierToCoolAfterDaysSinceLastAccessTimeGreaterThan()
```

##### `ResetTierToCoolAfterDaysSinceModificationGreaterThan` <a name="ResetTierToCoolAfterDaysSinceModificationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToCoolAfterDaysSinceModificationGreaterThan"></a>

```go
func ResetTierToCoolAfterDaysSinceModificationGreaterThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.autoTierToHotFromCoolEnabledInput">AutoTierToHotFromCoolEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceCreationGreaterThanInput">DeleteAfterDaysSinceCreationGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceLastAccessTimeGreaterThanInput">DeleteAfterDaysSinceLastAccessTimeGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceModificationGreaterThanInput">DeleteAfterDaysSinceModificationGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceCreationGreaterThanInput">TierToArchiveAfterDaysSinceCreationGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThanInput">TierToArchiveAfterDaysSinceLastAccessTimeGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput">TierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceModificationGreaterThanInput">TierToArchiveAfterDaysSinceModificationGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThanInput">TierToColdAfterDaysSinceCreationGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceLastAccessTimeGreaterThanInput">TierToColdAfterDaysSinceLastAccessTimeGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceModificationGreaterThanInput">TierToColdAfterDaysSinceModificationGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceCreationGreaterThanInput">TierToCoolAfterDaysSinceCreationGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceLastAccessTimeGreaterThanInput">TierToCoolAfterDaysSinceLastAccessTimeGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceModificationGreaterThanInput">TierToCoolAfterDaysSinceModificationGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.autoTierToHotFromCoolEnabled">AutoTierToHotFromCoolEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceCreationGreaterThan">DeleteAfterDaysSinceCreationGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceLastAccessTimeGreaterThan">DeleteAfterDaysSinceLastAccessTimeGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceModificationGreaterThan">DeleteAfterDaysSinceModificationGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceCreationGreaterThan">TierToArchiveAfterDaysSinceCreationGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan">TierToArchiveAfterDaysSinceLastAccessTimeGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">TierToArchiveAfterDaysSinceLastTierChangeGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceModificationGreaterThan">TierToArchiveAfterDaysSinceModificationGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan">TierToColdAfterDaysSinceCreationGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceLastAccessTimeGreaterThan">TierToColdAfterDaysSinceLastAccessTimeGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceModificationGreaterThan">TierToColdAfterDaysSinceModificationGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceCreationGreaterThan">TierToCoolAfterDaysSinceCreationGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceLastAccessTimeGreaterThan">TierToCoolAfterDaysSinceLastAccessTimeGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceModificationGreaterThan">TierToCoolAfterDaysSinceModificationGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob">StorageManagementPolicyRuleActionsBaseBlob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoTierToHotFromCoolEnabledInput`<sup>Optional</sup> <a name="AutoTierToHotFromCoolEnabledInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.autoTierToHotFromCoolEnabledInput"></a>

```go
func AutoTierToHotFromCoolEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteAfterDaysSinceCreationGreaterThanInput`<sup>Optional</sup> <a name="DeleteAfterDaysSinceCreationGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceCreationGreaterThanInput"></a>

```go
func DeleteAfterDaysSinceCreationGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `DeleteAfterDaysSinceLastAccessTimeGreaterThanInput`<sup>Optional</sup> <a name="DeleteAfterDaysSinceLastAccessTimeGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceLastAccessTimeGreaterThanInput"></a>

```go
func DeleteAfterDaysSinceLastAccessTimeGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `DeleteAfterDaysSinceModificationGreaterThanInput`<sup>Optional</sup> <a name="DeleteAfterDaysSinceModificationGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceModificationGreaterThanInput"></a>

```go
func DeleteAfterDaysSinceModificationGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `TierToArchiveAfterDaysSinceCreationGreaterThanInput`<sup>Optional</sup> <a name="TierToArchiveAfterDaysSinceCreationGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceCreationGreaterThanInput"></a>

```go
func TierToArchiveAfterDaysSinceCreationGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `TierToArchiveAfterDaysSinceLastAccessTimeGreaterThanInput`<sup>Optional</sup> <a name="TierToArchiveAfterDaysSinceLastAccessTimeGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThanInput"></a>

```go
func TierToArchiveAfterDaysSinceLastAccessTimeGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `TierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput`<sup>Optional</sup> <a name="TierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput"></a>

```go
func TierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `TierToArchiveAfterDaysSinceModificationGreaterThanInput`<sup>Optional</sup> <a name="TierToArchiveAfterDaysSinceModificationGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceModificationGreaterThanInput"></a>

```go
func TierToArchiveAfterDaysSinceModificationGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `TierToColdAfterDaysSinceCreationGreaterThanInput`<sup>Optional</sup> <a name="TierToColdAfterDaysSinceCreationGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThanInput"></a>

```go
func TierToColdAfterDaysSinceCreationGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `TierToColdAfterDaysSinceLastAccessTimeGreaterThanInput`<sup>Optional</sup> <a name="TierToColdAfterDaysSinceLastAccessTimeGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceLastAccessTimeGreaterThanInput"></a>

```go
func TierToColdAfterDaysSinceLastAccessTimeGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `TierToColdAfterDaysSinceModificationGreaterThanInput`<sup>Optional</sup> <a name="TierToColdAfterDaysSinceModificationGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceModificationGreaterThanInput"></a>

```go
func TierToColdAfterDaysSinceModificationGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `TierToCoolAfterDaysSinceCreationGreaterThanInput`<sup>Optional</sup> <a name="TierToCoolAfterDaysSinceCreationGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceCreationGreaterThanInput"></a>

```go
func TierToCoolAfterDaysSinceCreationGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `TierToCoolAfterDaysSinceLastAccessTimeGreaterThanInput`<sup>Optional</sup> <a name="TierToCoolAfterDaysSinceLastAccessTimeGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceLastAccessTimeGreaterThanInput"></a>

```go
func TierToCoolAfterDaysSinceLastAccessTimeGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `TierToCoolAfterDaysSinceModificationGreaterThanInput`<sup>Optional</sup> <a name="TierToCoolAfterDaysSinceModificationGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceModificationGreaterThanInput"></a>

```go
func TierToCoolAfterDaysSinceModificationGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `AutoTierToHotFromCoolEnabled`<sup>Required</sup> <a name="AutoTierToHotFromCoolEnabled" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.autoTierToHotFromCoolEnabled"></a>

```go
func AutoTierToHotFromCoolEnabled() interface{}
```

- *Type:* interface{}

---

##### `DeleteAfterDaysSinceCreationGreaterThan`<sup>Required</sup> <a name="DeleteAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceCreationGreaterThan"></a>

```go
func DeleteAfterDaysSinceCreationGreaterThan() *f64
```

- *Type:* *f64

---

##### `DeleteAfterDaysSinceLastAccessTimeGreaterThan`<sup>Required</sup> <a name="DeleteAfterDaysSinceLastAccessTimeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceLastAccessTimeGreaterThan"></a>

```go
func DeleteAfterDaysSinceLastAccessTimeGreaterThan() *f64
```

- *Type:* *f64

---

##### `DeleteAfterDaysSinceModificationGreaterThan`<sup>Required</sup> <a name="DeleteAfterDaysSinceModificationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceModificationGreaterThan"></a>

```go
func DeleteAfterDaysSinceModificationGreaterThan() *f64
```

- *Type:* *f64

---

##### `TierToArchiveAfterDaysSinceCreationGreaterThan`<sup>Required</sup> <a name="TierToArchiveAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceCreationGreaterThan"></a>

```go
func TierToArchiveAfterDaysSinceCreationGreaterThan() *f64
```

- *Type:* *f64

---

##### `TierToArchiveAfterDaysSinceLastAccessTimeGreaterThan`<sup>Required</sup> <a name="TierToArchiveAfterDaysSinceLastAccessTimeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan"></a>

```go
func TierToArchiveAfterDaysSinceLastAccessTimeGreaterThan() *f64
```

- *Type:* *f64

---

##### `TierToArchiveAfterDaysSinceLastTierChangeGreaterThan`<sup>Required</sup> <a name="TierToArchiveAfterDaysSinceLastTierChangeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```go
func TierToArchiveAfterDaysSinceLastTierChangeGreaterThan() *f64
```

- *Type:* *f64

---

##### `TierToArchiveAfterDaysSinceModificationGreaterThan`<sup>Required</sup> <a name="TierToArchiveAfterDaysSinceModificationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceModificationGreaterThan"></a>

```go
func TierToArchiveAfterDaysSinceModificationGreaterThan() *f64
```

- *Type:* *f64

---

##### `TierToColdAfterDaysSinceCreationGreaterThan`<sup>Required</sup> <a name="TierToColdAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan"></a>

```go
func TierToColdAfterDaysSinceCreationGreaterThan() *f64
```

- *Type:* *f64

---

##### `TierToColdAfterDaysSinceLastAccessTimeGreaterThan`<sup>Required</sup> <a name="TierToColdAfterDaysSinceLastAccessTimeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceLastAccessTimeGreaterThan"></a>

```go
func TierToColdAfterDaysSinceLastAccessTimeGreaterThan() *f64
```

- *Type:* *f64

---

##### `TierToColdAfterDaysSinceModificationGreaterThan`<sup>Required</sup> <a name="TierToColdAfterDaysSinceModificationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceModificationGreaterThan"></a>

```go
func TierToColdAfterDaysSinceModificationGreaterThan() *f64
```

- *Type:* *f64

---

##### `TierToCoolAfterDaysSinceCreationGreaterThan`<sup>Required</sup> <a name="TierToCoolAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceCreationGreaterThan"></a>

```go
func TierToCoolAfterDaysSinceCreationGreaterThan() *f64
```

- *Type:* *f64

---

##### `TierToCoolAfterDaysSinceLastAccessTimeGreaterThan`<sup>Required</sup> <a name="TierToCoolAfterDaysSinceLastAccessTimeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceLastAccessTimeGreaterThan"></a>

```go
func TierToCoolAfterDaysSinceLastAccessTimeGreaterThan() *f64
```

- *Type:* *f64

---

##### `TierToCoolAfterDaysSinceModificationGreaterThan`<sup>Required</sup> <a name="TierToCoolAfterDaysSinceModificationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceModificationGreaterThan"></a>

```go
func TierToCoolAfterDaysSinceModificationGreaterThan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageManagementPolicyRuleActionsBaseBlob
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob">StorageManagementPolicyRuleActionsBaseBlob</a>

---


### StorageManagementPolicyRuleActionsOutputReference <a name="StorageManagementPolicyRuleActionsOutputReference" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

storagemanagementpolicy.NewStorageManagementPolicyRuleActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageManagementPolicyRuleActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putBaseBlob">PutBaseBlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putSnapshot">PutSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putVersion">PutVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resetBaseBlob">ResetBaseBlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resetSnapshot">ResetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseBlob` <a name="PutBaseBlob" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putBaseBlob"></a>

```go
func PutBaseBlob(value StorageManagementPolicyRuleActionsBaseBlob)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putBaseBlob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob">StorageManagementPolicyRuleActionsBaseBlob</a>

---

##### `PutSnapshot` <a name="PutSnapshot" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putSnapshot"></a>

```go
func PutSnapshot(value StorageManagementPolicyRuleActionsSnapshot)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot">StorageManagementPolicyRuleActionsSnapshot</a>

---

##### `PutVersion` <a name="PutVersion" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putVersion"></a>

```go
func PutVersion(value StorageManagementPolicyRuleActionsVersion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion">StorageManagementPolicyRuleActionsVersion</a>

---

##### `ResetBaseBlob` <a name="ResetBaseBlob" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resetBaseBlob"></a>

```go
func ResetBaseBlob()
```

##### `ResetSnapshot` <a name="ResetSnapshot" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resetSnapshot"></a>

```go
func ResetSnapshot()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.baseBlob">BaseBlob</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference">StorageManagementPolicyRuleActionsBaseBlobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference">StorageManagementPolicyRuleActionsSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.version">Version</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference">StorageManagementPolicyRuleActionsVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.baseBlobInput">BaseBlobInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob">StorageManagementPolicyRuleActionsBaseBlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.snapshotInput">SnapshotInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot">StorageManagementPolicyRuleActionsSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.versionInput">VersionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion">StorageManagementPolicyRuleActionsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions">StorageManagementPolicyRuleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseBlob`<sup>Required</sup> <a name="BaseBlob" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.baseBlob"></a>

```go
func BaseBlob() StorageManagementPolicyRuleActionsBaseBlobOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference">StorageManagementPolicyRuleActionsBaseBlobOutputReference</a>

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.snapshot"></a>

```go
func Snapshot() StorageManagementPolicyRuleActionsSnapshotOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference">StorageManagementPolicyRuleActionsSnapshotOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.version"></a>

```go
func Version() StorageManagementPolicyRuleActionsVersionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference">StorageManagementPolicyRuleActionsVersionOutputReference</a>

---

##### `BaseBlobInput`<sup>Optional</sup> <a name="BaseBlobInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.baseBlobInput"></a>

```go
func BaseBlobInput() StorageManagementPolicyRuleActionsBaseBlob
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob">StorageManagementPolicyRuleActionsBaseBlob</a>

---

##### `SnapshotInput`<sup>Optional</sup> <a name="SnapshotInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.snapshotInput"></a>

```go
func SnapshotInput() StorageManagementPolicyRuleActionsSnapshot
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot">StorageManagementPolicyRuleActionsSnapshot</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.versionInput"></a>

```go
func VersionInput() StorageManagementPolicyRuleActionsVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion">StorageManagementPolicyRuleActionsVersion</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageManagementPolicyRuleActions
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions">StorageManagementPolicyRuleActions</a>

---


### StorageManagementPolicyRuleActionsSnapshotOutputReference <a name="StorageManagementPolicyRuleActionsSnapshotOutputReference" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

storagemanagementpolicy.NewStorageManagementPolicyRuleActionsSnapshotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageManagementPolicyRuleActionsSnapshotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetChangeTierToArchiveAfterDaysSinceCreation">ResetChangeTierToArchiveAfterDaysSinceCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetChangeTierToCoolAfterDaysSinceCreation">ResetChangeTierToCoolAfterDaysSinceCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetDeleteAfterDaysSinceCreationGreaterThan">ResetDeleteAfterDaysSinceCreationGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan">ResetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetTierToColdAfterDaysSinceCreationGreaterThan">ResetTierToColdAfterDaysSinceCreationGreaterThan</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChangeTierToArchiveAfterDaysSinceCreation` <a name="ResetChangeTierToArchiveAfterDaysSinceCreation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetChangeTierToArchiveAfterDaysSinceCreation"></a>

```go
func ResetChangeTierToArchiveAfterDaysSinceCreation()
```

##### `ResetChangeTierToCoolAfterDaysSinceCreation` <a name="ResetChangeTierToCoolAfterDaysSinceCreation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetChangeTierToCoolAfterDaysSinceCreation"></a>

```go
func ResetChangeTierToCoolAfterDaysSinceCreation()
```

##### `ResetDeleteAfterDaysSinceCreationGreaterThan` <a name="ResetDeleteAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetDeleteAfterDaysSinceCreationGreaterThan"></a>

```go
func ResetDeleteAfterDaysSinceCreationGreaterThan()
```

##### `ResetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan` <a name="ResetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```go
func ResetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan()
```

##### `ResetTierToColdAfterDaysSinceCreationGreaterThan` <a name="ResetTierToColdAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetTierToColdAfterDaysSinceCreationGreaterThan"></a>

```go
func ResetTierToColdAfterDaysSinceCreationGreaterThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToArchiveAfterDaysSinceCreationInput">ChangeTierToArchiveAfterDaysSinceCreationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToCoolAfterDaysSinceCreationInput">ChangeTierToCoolAfterDaysSinceCreationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.deleteAfterDaysSinceCreationGreaterThanInput">DeleteAfterDaysSinceCreationGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput">TierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThanInput">TierToColdAfterDaysSinceCreationGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToArchiveAfterDaysSinceCreation">ChangeTierToArchiveAfterDaysSinceCreation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToCoolAfterDaysSinceCreation">ChangeTierToCoolAfterDaysSinceCreation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.deleteAfterDaysSinceCreationGreaterThan">DeleteAfterDaysSinceCreationGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">TierToArchiveAfterDaysSinceLastTierChangeGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan">TierToColdAfterDaysSinceCreationGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot">StorageManagementPolicyRuleActionsSnapshot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChangeTierToArchiveAfterDaysSinceCreationInput`<sup>Optional</sup> <a name="ChangeTierToArchiveAfterDaysSinceCreationInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToArchiveAfterDaysSinceCreationInput"></a>

```go
func ChangeTierToArchiveAfterDaysSinceCreationInput() *f64
```

- *Type:* *f64

---

##### `ChangeTierToCoolAfterDaysSinceCreationInput`<sup>Optional</sup> <a name="ChangeTierToCoolAfterDaysSinceCreationInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToCoolAfterDaysSinceCreationInput"></a>

```go
func ChangeTierToCoolAfterDaysSinceCreationInput() *f64
```

- *Type:* *f64

---

##### `DeleteAfterDaysSinceCreationGreaterThanInput`<sup>Optional</sup> <a name="DeleteAfterDaysSinceCreationGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.deleteAfterDaysSinceCreationGreaterThanInput"></a>

```go
func DeleteAfterDaysSinceCreationGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `TierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput`<sup>Optional</sup> <a name="TierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput"></a>

```go
func TierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `TierToColdAfterDaysSinceCreationGreaterThanInput`<sup>Optional</sup> <a name="TierToColdAfterDaysSinceCreationGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThanInput"></a>

```go
func TierToColdAfterDaysSinceCreationGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `ChangeTierToArchiveAfterDaysSinceCreation`<sup>Required</sup> <a name="ChangeTierToArchiveAfterDaysSinceCreation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToArchiveAfterDaysSinceCreation"></a>

```go
func ChangeTierToArchiveAfterDaysSinceCreation() *f64
```

- *Type:* *f64

---

##### `ChangeTierToCoolAfterDaysSinceCreation`<sup>Required</sup> <a name="ChangeTierToCoolAfterDaysSinceCreation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToCoolAfterDaysSinceCreation"></a>

```go
func ChangeTierToCoolAfterDaysSinceCreation() *f64
```

- *Type:* *f64

---

##### `DeleteAfterDaysSinceCreationGreaterThan`<sup>Required</sup> <a name="DeleteAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.deleteAfterDaysSinceCreationGreaterThan"></a>

```go
func DeleteAfterDaysSinceCreationGreaterThan() *f64
```

- *Type:* *f64

---

##### `TierToArchiveAfterDaysSinceLastTierChangeGreaterThan`<sup>Required</sup> <a name="TierToArchiveAfterDaysSinceLastTierChangeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```go
func TierToArchiveAfterDaysSinceLastTierChangeGreaterThan() *f64
```

- *Type:* *f64

---

##### `TierToColdAfterDaysSinceCreationGreaterThan`<sup>Required</sup> <a name="TierToColdAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan"></a>

```go
func TierToColdAfterDaysSinceCreationGreaterThan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageManagementPolicyRuleActionsSnapshot
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot">StorageManagementPolicyRuleActionsSnapshot</a>

---


### StorageManagementPolicyRuleActionsVersionOutputReference <a name="StorageManagementPolicyRuleActionsVersionOutputReference" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

storagemanagementpolicy.NewStorageManagementPolicyRuleActionsVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageManagementPolicyRuleActionsVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetChangeTierToArchiveAfterDaysSinceCreation">ResetChangeTierToArchiveAfterDaysSinceCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetChangeTierToCoolAfterDaysSinceCreation">ResetChangeTierToCoolAfterDaysSinceCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetDeleteAfterDaysSinceCreation">ResetDeleteAfterDaysSinceCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan">ResetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetTierToColdAfterDaysSinceCreationGreaterThan">ResetTierToColdAfterDaysSinceCreationGreaterThan</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChangeTierToArchiveAfterDaysSinceCreation` <a name="ResetChangeTierToArchiveAfterDaysSinceCreation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetChangeTierToArchiveAfterDaysSinceCreation"></a>

```go
func ResetChangeTierToArchiveAfterDaysSinceCreation()
```

##### `ResetChangeTierToCoolAfterDaysSinceCreation` <a name="ResetChangeTierToCoolAfterDaysSinceCreation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetChangeTierToCoolAfterDaysSinceCreation"></a>

```go
func ResetChangeTierToCoolAfterDaysSinceCreation()
```

##### `ResetDeleteAfterDaysSinceCreation` <a name="ResetDeleteAfterDaysSinceCreation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetDeleteAfterDaysSinceCreation"></a>

```go
func ResetDeleteAfterDaysSinceCreation()
```

##### `ResetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan` <a name="ResetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```go
func ResetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan()
```

##### `ResetTierToColdAfterDaysSinceCreationGreaterThan` <a name="ResetTierToColdAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetTierToColdAfterDaysSinceCreationGreaterThan"></a>

```go
func ResetTierToColdAfterDaysSinceCreationGreaterThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToArchiveAfterDaysSinceCreationInput">ChangeTierToArchiveAfterDaysSinceCreationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToCoolAfterDaysSinceCreationInput">ChangeTierToCoolAfterDaysSinceCreationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.deleteAfterDaysSinceCreationInput">DeleteAfterDaysSinceCreationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput">TierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThanInput">TierToColdAfterDaysSinceCreationGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToArchiveAfterDaysSinceCreation">ChangeTierToArchiveAfterDaysSinceCreation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToCoolAfterDaysSinceCreation">ChangeTierToCoolAfterDaysSinceCreation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.deleteAfterDaysSinceCreation">DeleteAfterDaysSinceCreation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">TierToArchiveAfterDaysSinceLastTierChangeGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan">TierToColdAfterDaysSinceCreationGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion">StorageManagementPolicyRuleActionsVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChangeTierToArchiveAfterDaysSinceCreationInput`<sup>Optional</sup> <a name="ChangeTierToArchiveAfterDaysSinceCreationInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToArchiveAfterDaysSinceCreationInput"></a>

```go
func ChangeTierToArchiveAfterDaysSinceCreationInput() *f64
```

- *Type:* *f64

---

##### `ChangeTierToCoolAfterDaysSinceCreationInput`<sup>Optional</sup> <a name="ChangeTierToCoolAfterDaysSinceCreationInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToCoolAfterDaysSinceCreationInput"></a>

```go
func ChangeTierToCoolAfterDaysSinceCreationInput() *f64
```

- *Type:* *f64

---

##### `DeleteAfterDaysSinceCreationInput`<sup>Optional</sup> <a name="DeleteAfterDaysSinceCreationInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.deleteAfterDaysSinceCreationInput"></a>

```go
func DeleteAfterDaysSinceCreationInput() *f64
```

- *Type:* *f64

---

##### `TierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput`<sup>Optional</sup> <a name="TierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput"></a>

```go
func TierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `TierToColdAfterDaysSinceCreationGreaterThanInput`<sup>Optional</sup> <a name="TierToColdAfterDaysSinceCreationGreaterThanInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThanInput"></a>

```go
func TierToColdAfterDaysSinceCreationGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `ChangeTierToArchiveAfterDaysSinceCreation`<sup>Required</sup> <a name="ChangeTierToArchiveAfterDaysSinceCreation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToArchiveAfterDaysSinceCreation"></a>

```go
func ChangeTierToArchiveAfterDaysSinceCreation() *f64
```

- *Type:* *f64

---

##### `ChangeTierToCoolAfterDaysSinceCreation`<sup>Required</sup> <a name="ChangeTierToCoolAfterDaysSinceCreation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToCoolAfterDaysSinceCreation"></a>

```go
func ChangeTierToCoolAfterDaysSinceCreation() *f64
```

- *Type:* *f64

---

##### `DeleteAfterDaysSinceCreation`<sup>Required</sup> <a name="DeleteAfterDaysSinceCreation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.deleteAfterDaysSinceCreation"></a>

```go
func DeleteAfterDaysSinceCreation() *f64
```

- *Type:* *f64

---

##### `TierToArchiveAfterDaysSinceLastTierChangeGreaterThan`<sup>Required</sup> <a name="TierToArchiveAfterDaysSinceLastTierChangeGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```go
func TierToArchiveAfterDaysSinceLastTierChangeGreaterThan() *f64
```

- *Type:* *f64

---

##### `TierToColdAfterDaysSinceCreationGreaterThan`<sup>Required</sup> <a name="TierToColdAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan"></a>

```go
func TierToColdAfterDaysSinceCreationGreaterThan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageManagementPolicyRuleActionsVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion">StorageManagementPolicyRuleActionsVersion</a>

---


### StorageManagementPolicyRuleFiltersMatchBlobIndexTagList <a name="StorageManagementPolicyRuleFiltersMatchBlobIndexTagList" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

storagemanagementpolicy.NewStorageManagementPolicyRuleFiltersMatchBlobIndexTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageManagementPolicyRuleFiltersMatchBlobIndexTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.get"></a>

```go
func Get(index *f64) StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference <a name="StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

storagemanagementpolicy.NewStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.resetOperation">ResetOperation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperation` <a name="ResetOperation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.resetOperation"></a>

```go
func ResetOperation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.operationInput">OperationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.operationInput"></a>

```go
func OperationInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageManagementPolicyRuleFiltersOutputReference <a name="StorageManagementPolicyRuleFiltersOutputReference" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

storagemanagementpolicy.NewStorageManagementPolicyRuleFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageManagementPolicyRuleFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.putMatchBlobIndexTag">PutMatchBlobIndexTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.resetMatchBlobIndexTag">ResetMatchBlobIndexTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.resetPrefixMatch">ResetPrefixMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchBlobIndexTag` <a name="PutMatchBlobIndexTag" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.putMatchBlobIndexTag"></a>

```go
func PutMatchBlobIndexTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.putMatchBlobIndexTag.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchBlobIndexTag` <a name="ResetMatchBlobIndexTag" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.resetMatchBlobIndexTag"></a>

```go
func ResetMatchBlobIndexTag()
```

##### `ResetPrefixMatch` <a name="ResetPrefixMatch" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.resetPrefixMatch"></a>

```go
func ResetPrefixMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.matchBlobIndexTag">MatchBlobIndexTag</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList">StorageManagementPolicyRuleFiltersMatchBlobIndexTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.blobTypesInput">BlobTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.matchBlobIndexTagInput">MatchBlobIndexTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.prefixMatchInput">PrefixMatchInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.blobTypes">BlobTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.prefixMatch">PrefixMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters">StorageManagementPolicyRuleFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchBlobIndexTag`<sup>Required</sup> <a name="MatchBlobIndexTag" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.matchBlobIndexTag"></a>

```go
func MatchBlobIndexTag() StorageManagementPolicyRuleFiltersMatchBlobIndexTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList">StorageManagementPolicyRuleFiltersMatchBlobIndexTagList</a>

---

##### `BlobTypesInput`<sup>Optional</sup> <a name="BlobTypesInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.blobTypesInput"></a>

```go
func BlobTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchBlobIndexTagInput`<sup>Optional</sup> <a name="MatchBlobIndexTagInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.matchBlobIndexTagInput"></a>

```go
func MatchBlobIndexTagInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixMatchInput`<sup>Optional</sup> <a name="PrefixMatchInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.prefixMatchInput"></a>

```go
func PrefixMatchInput() *[]*string
```

- *Type:* *[]*string

---

##### `BlobTypes`<sup>Required</sup> <a name="BlobTypes" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.blobTypes"></a>

```go
func BlobTypes() *[]*string
```

- *Type:* *[]*string

---

##### `PrefixMatch`<sup>Required</sup> <a name="PrefixMatch" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.prefixMatch"></a>

```go
func PrefixMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageManagementPolicyRuleFilters
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters">StorageManagementPolicyRuleFilters</a>

---


### StorageManagementPolicyRuleList <a name="StorageManagementPolicyRuleList" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

storagemanagementpolicy.NewStorageManagementPolicyRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageManagementPolicyRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.get"></a>

```go
func Get(index *f64) StorageManagementPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageManagementPolicyRuleOutputReference <a name="StorageManagementPolicyRuleOutputReference" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

storagemanagementpolicy.NewStorageManagementPolicyRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageManagementPolicyRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.putFilters">PutFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.putActions"></a>

```go
func PutActions(value StorageManagementPolicyRuleActions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions">StorageManagementPolicyRuleActions</a>

---

##### `PutFilters` <a name="PutFilters" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.putFilters"></a>

```go
func PutFilters(value StorageManagementPolicyRuleFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters">StorageManagementPolicyRuleFilters</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference">StorageManagementPolicyRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference">StorageManagementPolicyRuleFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.actionsInput">ActionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions">StorageManagementPolicyRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.filtersInput">FiltersInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters">StorageManagementPolicyRuleFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.actions"></a>

```go
func Actions() StorageManagementPolicyRuleActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference">StorageManagementPolicyRuleActionsOutputReference</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.filters"></a>

```go
func Filters() StorageManagementPolicyRuleFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference">StorageManagementPolicyRuleFiltersOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.actionsInput"></a>

```go
func ActionsInput() StorageManagementPolicyRuleActions
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions">StorageManagementPolicyRuleActions</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.filtersInput"></a>

```go
func FiltersInput() StorageManagementPolicyRuleFilters
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters">StorageManagementPolicyRuleFilters</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageManagementPolicyTimeoutsOutputReference <a name="StorageManagementPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/storagemanagementpolicy"

storagemanagementpolicy.NewStorageManagementPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageManagementPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



