# `synapseWorkspaceAadAdmin` Submodule <a name="`synapseWorkspaceAadAdmin` Submodule" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseWorkspaceAadAdmin <a name="SynapseWorkspaceAadAdmin" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin azurerm_synapse_workspace_aad_admin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspaceaadadmin"

synapseworkspaceaadadmin.NewSynapseWorkspaceAadAdmin(scope Construct, id *string, config SynapseWorkspaceAadAdminConfig) SynapseWorkspaceAadAdmin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig">SynapseWorkspaceAadAdminConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig">SynapseWorkspaceAadAdminConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.putTimeouts"></a>

```go
func PutTimeouts(value SynapseWorkspaceAadAdminTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseWorkspaceAadAdmin resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspaceaadadmin"

synapseworkspaceaadadmin.SynapseWorkspaceAadAdmin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspaceaadadmin"

synapseworkspaceaadadmin.SynapseWorkspaceAadAdmin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspaceaadadmin"

synapseworkspaceaadadmin.SynapseWorkspaceAadAdmin_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspaceaadadmin"

synapseworkspaceaadadmin.SynapseWorkspaceAadAdmin_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SynapseWorkspaceAadAdmin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SynapseWorkspaceAadAdmin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SynapseWorkspaceAadAdmin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SynapseWorkspaceAadAdmin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference">SynapseWorkspaceAadAdminTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.loginInput">LoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.synapseWorkspaceIdInput">SynapseWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.login">Login</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.synapseWorkspaceId">SynapseWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.timeouts"></a>

```go
func Timeouts() SynapseWorkspaceAadAdminTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference">SynapseWorkspaceAadAdminTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.loginInput"></a>

```go
func LoginInput() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `SynapseWorkspaceIdInput`<sup>Optional</sup> <a name="SynapseWorkspaceIdInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.synapseWorkspaceIdInput"></a>

```go
func SynapseWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.login"></a>

```go
func Login() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `SynapseWorkspaceId`<sup>Required</sup> <a name="SynapseWorkspaceId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.synapseWorkspaceId"></a>

```go
func SynapseWorkspaceId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdmin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseWorkspaceAadAdminConfig <a name="SynapseWorkspaceAadAdminConfig" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspaceaadadmin"

&synapseworkspaceaadadmin.SynapseWorkspaceAadAdminConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Login: *string,
	ObjectId: *string,
	SynapseWorkspaceId: *string,
	TenantId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.login">Login</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#login SynapseWorkspaceAadAdmin#login}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#object_id SynapseWorkspaceAadAdmin#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.synapseWorkspaceId">SynapseWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#synapse_workspace_id SynapseWorkspaceAadAdmin#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#tenant_id SynapseWorkspaceAadAdmin#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#id SynapseWorkspaceAadAdmin#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.login"></a>

```go
Login *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#login SynapseWorkspaceAadAdmin#login}.

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#object_id SynapseWorkspaceAadAdmin#object_id}.

---

##### `SynapseWorkspaceId`<sup>Required</sup> <a name="SynapseWorkspaceId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.synapseWorkspaceId"></a>

```go
SynapseWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#synapse_workspace_id SynapseWorkspaceAadAdmin#synapse_workspace_id}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#tenant_id SynapseWorkspaceAadAdmin#tenant_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#id SynapseWorkspaceAadAdmin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminConfig.property.timeouts"></a>

```go
Timeouts SynapseWorkspaceAadAdminTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#timeouts SynapseWorkspaceAadAdmin#timeouts}

---

### SynapseWorkspaceAadAdminTimeouts <a name="SynapseWorkspaceAadAdminTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspaceaadadmin"

&synapseworkspaceaadadmin.SynapseWorkspaceAadAdminTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#create SynapseWorkspaceAadAdmin#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#delete SynapseWorkspaceAadAdmin#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#read SynapseWorkspaceAadAdmin#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#update SynapseWorkspaceAadAdmin#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#create SynapseWorkspaceAadAdmin#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#delete SynapseWorkspaceAadAdmin#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#read SynapseWorkspaceAadAdmin#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/synapse_workspace_aad_admin#update SynapseWorkspaceAadAdmin#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseWorkspaceAadAdminTimeoutsOutputReference <a name="SynapseWorkspaceAadAdminTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseworkspaceaadadmin"

synapseworkspaceaadadmin.NewSynapseWorkspaceAadAdminTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SynapseWorkspaceAadAdminTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



