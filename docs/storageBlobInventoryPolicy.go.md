# `storageBlobInventoryPolicy` Submodule <a name="`storageBlobInventoryPolicy` Submodule" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBlobInventoryPolicy <a name="StorageBlobInventoryPolicy" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy azurerm_storage_blob_inventory_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/storageblobinventorypolicy"

storageblobinventorypolicy.NewStorageBlobInventoryPolicy(scope Construct, id *string, config StorageBlobInventoryPolicyConfig) StorageBlobInventoryPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig">StorageBlobInventoryPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig">StorageBlobInventoryPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.putTimeouts"></a>

```go
func PutTimeouts(value StorageBlobInventoryPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts">StorageBlobInventoryPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageBlobInventoryPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/storageblobinventorypolicy"

storageblobinventorypolicy.StorageBlobInventoryPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/storageblobinventorypolicy"

storageblobinventorypolicy.StorageBlobInventoryPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/storageblobinventorypolicy"

storageblobinventorypolicy.StorageBlobInventoryPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/storageblobinventorypolicy"

storageblobinventorypolicy.StorageBlobInventoryPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StorageBlobInventoryPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageBlobInventoryPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageBlobInventoryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StorageBlobInventoryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList">StorageBlobInventoryPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference">StorageBlobInventoryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.rules"></a>

```go
func Rules() StorageBlobInventoryPolicyRulesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList">StorageBlobInventoryPolicyRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.timeouts"></a>

```go
func Timeouts() StorageBlobInventoryPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference">StorageBlobInventoryPolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBlobInventoryPolicyConfig <a name="StorageBlobInventoryPolicyConfig" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/storageblobinventorypolicy"

&storageblobinventorypolicy.StorageBlobInventoryPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Rules: interface{},
	StorageAccountId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#storage_account_id StorageBlobInventoryPolicy#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#id StorageBlobInventoryPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts">StorageBlobInventoryPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#rules StorageBlobInventoryPolicy#rules}

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#storage_account_id StorageBlobInventoryPolicy#storage_account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#id StorageBlobInventoryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.timeouts"></a>

```go
Timeouts StorageBlobInventoryPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts">StorageBlobInventoryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#timeouts StorageBlobInventoryPolicy#timeouts}

---

### StorageBlobInventoryPolicyRules <a name="StorageBlobInventoryPolicyRules" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/storageblobinventorypolicy"

&storageblobinventorypolicy.StorageBlobInventoryPolicyRules {
	Format: *string,
	Name: *string,
	Schedule: *string,
	SchemaFields: *[]*string,
	Scope: *string,
	StorageContainerName: *string,
	Filter: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#format StorageBlobInventoryPolicy#format}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#name StorageBlobInventoryPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.schedule">Schedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#schedule StorageBlobInventoryPolicy#schedule}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.schemaFields">SchemaFields</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#schema_fields StorageBlobInventoryPolicy#schema_fields}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#scope StorageBlobInventoryPolicy#scope}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.storageContainerName">StorageContainerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#storage_container_name StorageBlobInventoryPolicy#storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter">StorageBlobInventoryPolicyRulesFilter</a></code> | filter block. |

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#format StorageBlobInventoryPolicy#format}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#name StorageBlobInventoryPolicy#name}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#schedule StorageBlobInventoryPolicy#schedule}.

---

##### `SchemaFields`<sup>Required</sup> <a name="SchemaFields" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.schemaFields"></a>

```go
SchemaFields *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#schema_fields StorageBlobInventoryPolicy#schema_fields}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#scope StorageBlobInventoryPolicy#scope}.

---

##### `StorageContainerName`<sup>Required</sup> <a name="StorageContainerName" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.storageContainerName"></a>

```go
StorageContainerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#storage_container_name StorageBlobInventoryPolicy#storage_container_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.filter"></a>

```go
Filter StorageBlobInventoryPolicyRulesFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter">StorageBlobInventoryPolicyRulesFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#filter StorageBlobInventoryPolicy#filter}

---

### StorageBlobInventoryPolicyRulesFilter <a name="StorageBlobInventoryPolicyRulesFilter" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/storageblobinventorypolicy"

&storageblobinventorypolicy.StorageBlobInventoryPolicyRulesFilter {
	BlobTypes: *[]*string,
	ExcludePrefixes: *[]*string,
	IncludeBlobVersions: interface{},
	IncludeDeleted: interface{},
	IncludeSnapshots: interface{},
	PrefixMatch: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.blobTypes">BlobTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#blob_types StorageBlobInventoryPolicy#blob_types}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.excludePrefixes">ExcludePrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#exclude_prefixes StorageBlobInventoryPolicy#exclude_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.includeBlobVersions">IncludeBlobVersions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#include_blob_versions StorageBlobInventoryPolicy#include_blob_versions}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.includeDeleted">IncludeDeleted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#include_deleted StorageBlobInventoryPolicy#include_deleted}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.includeSnapshots">IncludeSnapshots</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#include_snapshots StorageBlobInventoryPolicy#include_snapshots}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.prefixMatch">PrefixMatch</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#prefix_match StorageBlobInventoryPolicy#prefix_match}. |

---

##### `BlobTypes`<sup>Required</sup> <a name="BlobTypes" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.blobTypes"></a>

```go
BlobTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#blob_types StorageBlobInventoryPolicy#blob_types}.

---

##### `ExcludePrefixes`<sup>Optional</sup> <a name="ExcludePrefixes" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.excludePrefixes"></a>

```go
ExcludePrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#exclude_prefixes StorageBlobInventoryPolicy#exclude_prefixes}.

---

##### `IncludeBlobVersions`<sup>Optional</sup> <a name="IncludeBlobVersions" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.includeBlobVersions"></a>

```go
IncludeBlobVersions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#include_blob_versions StorageBlobInventoryPolicy#include_blob_versions}.

---

##### `IncludeDeleted`<sup>Optional</sup> <a name="IncludeDeleted" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.includeDeleted"></a>

```go
IncludeDeleted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#include_deleted StorageBlobInventoryPolicy#include_deleted}.

---

##### `IncludeSnapshots`<sup>Optional</sup> <a name="IncludeSnapshots" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.includeSnapshots"></a>

```go
IncludeSnapshots interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#include_snapshots StorageBlobInventoryPolicy#include_snapshots}.

---

##### `PrefixMatch`<sup>Optional</sup> <a name="PrefixMatch" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.prefixMatch"></a>

```go
PrefixMatch *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#prefix_match StorageBlobInventoryPolicy#prefix_match}.

---

### StorageBlobInventoryPolicyTimeouts <a name="StorageBlobInventoryPolicyTimeouts" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/storageblobinventorypolicy"

&storageblobinventorypolicy.StorageBlobInventoryPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#create StorageBlobInventoryPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#delete StorageBlobInventoryPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#read StorageBlobInventoryPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#update StorageBlobInventoryPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#create StorageBlobInventoryPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#delete StorageBlobInventoryPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#read StorageBlobInventoryPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/storage_blob_inventory_policy#update StorageBlobInventoryPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBlobInventoryPolicyRulesFilterOutputReference <a name="StorageBlobInventoryPolicyRulesFilterOutputReference" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/storageblobinventorypolicy"

storageblobinventorypolicy.NewStorageBlobInventoryPolicyRulesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBlobInventoryPolicyRulesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetExcludePrefixes">ResetExcludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetIncludeBlobVersions">ResetIncludeBlobVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetIncludeDeleted">ResetIncludeDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetIncludeSnapshots">ResetIncludeSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetPrefixMatch">ResetPrefixMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludePrefixes` <a name="ResetExcludePrefixes" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetExcludePrefixes"></a>

```go
func ResetExcludePrefixes()
```

##### `ResetIncludeBlobVersions` <a name="ResetIncludeBlobVersions" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetIncludeBlobVersions"></a>

```go
func ResetIncludeBlobVersions()
```

##### `ResetIncludeDeleted` <a name="ResetIncludeDeleted" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetIncludeDeleted"></a>

```go
func ResetIncludeDeleted()
```

##### `ResetIncludeSnapshots` <a name="ResetIncludeSnapshots" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetIncludeSnapshots"></a>

```go
func ResetIncludeSnapshots()
```

##### `ResetPrefixMatch` <a name="ResetPrefixMatch" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetPrefixMatch"></a>

```go
func ResetPrefixMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.blobTypesInput">BlobTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.excludePrefixesInput">ExcludePrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeBlobVersionsInput">IncludeBlobVersionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeDeletedInput">IncludeDeletedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeSnapshotsInput">IncludeSnapshotsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.prefixMatchInput">PrefixMatchInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.blobTypes">BlobTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.excludePrefixes">ExcludePrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeBlobVersions">IncludeBlobVersions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeDeleted">IncludeDeleted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeSnapshots">IncludeSnapshots</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.prefixMatch">PrefixMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter">StorageBlobInventoryPolicyRulesFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlobTypesInput`<sup>Optional</sup> <a name="BlobTypesInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.blobTypesInput"></a>

```go
func BlobTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludePrefixesInput`<sup>Optional</sup> <a name="ExcludePrefixesInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.excludePrefixesInput"></a>

```go
func ExcludePrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeBlobVersionsInput`<sup>Optional</sup> <a name="IncludeBlobVersionsInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeBlobVersionsInput"></a>

```go
func IncludeBlobVersionsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeDeletedInput`<sup>Optional</sup> <a name="IncludeDeletedInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeDeletedInput"></a>

```go
func IncludeDeletedInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeSnapshotsInput`<sup>Optional</sup> <a name="IncludeSnapshotsInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeSnapshotsInput"></a>

```go
func IncludeSnapshotsInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixMatchInput`<sup>Optional</sup> <a name="PrefixMatchInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.prefixMatchInput"></a>

```go
func PrefixMatchInput() *[]*string
```

- *Type:* *[]*string

---

##### `BlobTypes`<sup>Required</sup> <a name="BlobTypes" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.blobTypes"></a>

```go
func BlobTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludePrefixes`<sup>Required</sup> <a name="ExcludePrefixes" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.excludePrefixes"></a>

```go
func ExcludePrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeBlobVersions`<sup>Required</sup> <a name="IncludeBlobVersions" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeBlobVersions"></a>

```go
func IncludeBlobVersions() interface{}
```

- *Type:* interface{}

---

##### `IncludeDeleted`<sup>Required</sup> <a name="IncludeDeleted" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeDeleted"></a>

```go
func IncludeDeleted() interface{}
```

- *Type:* interface{}

---

##### `IncludeSnapshots`<sup>Required</sup> <a name="IncludeSnapshots" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeSnapshots"></a>

```go
func IncludeSnapshots() interface{}
```

- *Type:* interface{}

---

##### `PrefixMatch`<sup>Required</sup> <a name="PrefixMatch" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.prefixMatch"></a>

```go
func PrefixMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBlobInventoryPolicyRulesFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter">StorageBlobInventoryPolicyRulesFilter</a>

---


### StorageBlobInventoryPolicyRulesList <a name="StorageBlobInventoryPolicyRulesList" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/storageblobinventorypolicy"

storageblobinventorypolicy.NewStorageBlobInventoryPolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageBlobInventoryPolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.get"></a>

```go
func Get(index *f64) StorageBlobInventoryPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageBlobInventoryPolicyRulesOutputReference <a name="StorageBlobInventoryPolicyRulesOutputReference" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/storageblobinventorypolicy"

storageblobinventorypolicy.NewStorageBlobInventoryPolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageBlobInventoryPolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.putFilter"></a>

```go
func PutFilter(value StorageBlobInventoryPolicyRulesFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter">StorageBlobInventoryPolicyRulesFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.resetFilter"></a>

```go
func ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference">StorageBlobInventoryPolicyRulesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter">StorageBlobInventoryPolicyRulesFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.schemaFieldsInput">SchemaFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.storageContainerNameInput">StorageContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.schemaFields">SchemaFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.storageContainerName">StorageContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.filter"></a>

```go
func Filter() StorageBlobInventoryPolicyRulesFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference">StorageBlobInventoryPolicyRulesFilterOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.filterInput"></a>

```go
func FilterInput() StorageBlobInventoryPolicyRulesFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter">StorageBlobInventoryPolicyRulesFilter</a>

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `SchemaFieldsInput`<sup>Optional</sup> <a name="SchemaFieldsInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.schemaFieldsInput"></a>

```go
func SchemaFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `StorageContainerNameInput`<sup>Optional</sup> <a name="StorageContainerNameInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.storageContainerNameInput"></a>

```go
func StorageContainerNameInput() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `SchemaFields`<sup>Required</sup> <a name="SchemaFields" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.schemaFields"></a>

```go
func SchemaFields() *[]*string
```

- *Type:* *[]*string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `StorageContainerName`<sup>Required</sup> <a name="StorageContainerName" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.storageContainerName"></a>

```go
func StorageContainerName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageBlobInventoryPolicyTimeoutsOutputReference <a name="StorageBlobInventoryPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/storageblobinventorypolicy"

storageblobinventorypolicy.NewStorageBlobInventoryPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBlobInventoryPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



