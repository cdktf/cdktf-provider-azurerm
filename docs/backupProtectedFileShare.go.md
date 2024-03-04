# `backupProtectedFileShare` Submodule <a name="`backupProtectedFileShare` Submodule" id="@cdktf/provider-azurerm.backupProtectedFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupProtectedFileShare <a name="BackupProtectedFileShare" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share azurerm_backup_protected_file_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backupprotectedfileshare"

backupprotectedfileshare.NewBackupProtectedFileShare(scope Construct, id *string, config BackupProtectedFileShareConfig) BackupProtectedFileShare
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig">BackupProtectedFileShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig">BackupProtectedFileShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.putTimeouts"></a>

```go
func PutTimeouts(value BackupProtectedFileShareTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts">BackupProtectedFileShareTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BackupProtectedFileShare resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backupprotectedfileshare"

backupprotectedfileshare.BackupProtectedFileShare_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backupprotectedfileshare"

backupprotectedfileshare.BackupProtectedFileShare_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backupprotectedfileshare"

backupprotectedfileshare.BackupProtectedFileShare_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backupprotectedfileshare"

backupprotectedfileshare.BackupProtectedFileShare_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BackupProtectedFileShare resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BackupProtectedFileShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BackupProtectedFileShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BackupProtectedFileShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference">BackupProtectedFileShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.backupPolicyIdInput">BackupPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.recoveryVaultNameInput">RecoveryVaultNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.sourceFileShareNameInput">SourceFileShareNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.sourceStorageAccountIdInput">SourceStorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.backupPolicyId">BackupPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.recoveryVaultName">RecoveryVaultName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.sourceFileShareName">SourceFileShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.sourceStorageAccountId">SourceStorageAccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.timeouts"></a>

```go
func Timeouts() BackupProtectedFileShareTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference">BackupProtectedFileShareTimeoutsOutputReference</a>

---

##### `BackupPolicyIdInput`<sup>Optional</sup> <a name="BackupPolicyIdInput" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.backupPolicyIdInput"></a>

```go
func BackupPolicyIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RecoveryVaultNameInput`<sup>Optional</sup> <a name="RecoveryVaultNameInput" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.recoveryVaultNameInput"></a>

```go
func RecoveryVaultNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SourceFileShareNameInput`<sup>Optional</sup> <a name="SourceFileShareNameInput" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.sourceFileShareNameInput"></a>

```go
func SourceFileShareNameInput() *string
```

- *Type:* *string

---

##### `SourceStorageAccountIdInput`<sup>Optional</sup> <a name="SourceStorageAccountIdInput" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.sourceStorageAccountIdInput"></a>

```go
func SourceStorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackupPolicyId`<sup>Required</sup> <a name="BackupPolicyId" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.backupPolicyId"></a>

```go
func BackupPolicyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RecoveryVaultName`<sup>Required</sup> <a name="RecoveryVaultName" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.recoveryVaultName"></a>

```go
func RecoveryVaultName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SourceFileShareName`<sup>Required</sup> <a name="SourceFileShareName" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.sourceFileShareName"></a>

```go
func SourceFileShareName() *string
```

- *Type:* *string

---

##### `SourceStorageAccountId`<sup>Required</sup> <a name="SourceStorageAccountId" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.sourceStorageAccountId"></a>

```go
func SourceStorageAccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupProtectedFileShareConfig <a name="BackupProtectedFileShareConfig" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backupprotectedfileshare"

&backupprotectedfileshare.BackupProtectedFileShareConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackupPolicyId: *string,
	RecoveryVaultName: *string,
	ResourceGroupName: *string,
	SourceFileShareName: *string,
	SourceStorageAccountId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.backupPolicyId">BackupPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#backup_policy_id BackupProtectedFileShare#backup_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.recoveryVaultName">RecoveryVaultName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#recovery_vault_name BackupProtectedFileShare#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#resource_group_name BackupProtectedFileShare#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.sourceFileShareName">SourceFileShareName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#source_file_share_name BackupProtectedFileShare#source_file_share_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.sourceStorageAccountId">SourceStorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#source_storage_account_id BackupProtectedFileShare#source_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#id BackupProtectedFileShare#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts">BackupProtectedFileShareTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupPolicyId`<sup>Required</sup> <a name="BackupPolicyId" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.backupPolicyId"></a>

```go
BackupPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#backup_policy_id BackupProtectedFileShare#backup_policy_id}.

---

##### `RecoveryVaultName`<sup>Required</sup> <a name="RecoveryVaultName" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.recoveryVaultName"></a>

```go
RecoveryVaultName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#recovery_vault_name BackupProtectedFileShare#recovery_vault_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#resource_group_name BackupProtectedFileShare#resource_group_name}.

---

##### `SourceFileShareName`<sup>Required</sup> <a name="SourceFileShareName" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.sourceFileShareName"></a>

```go
SourceFileShareName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#source_file_share_name BackupProtectedFileShare#source_file_share_name}.

---

##### `SourceStorageAccountId`<sup>Required</sup> <a name="SourceStorageAccountId" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.sourceStorageAccountId"></a>

```go
SourceStorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#source_storage_account_id BackupProtectedFileShare#source_storage_account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#id BackupProtectedFileShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.timeouts"></a>

```go
Timeouts BackupProtectedFileShareTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts">BackupProtectedFileShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#timeouts BackupProtectedFileShare#timeouts}

---

### BackupProtectedFileShareTimeouts <a name="BackupProtectedFileShareTimeouts" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backupprotectedfileshare"

&backupprotectedfileshare.BackupProtectedFileShareTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#create BackupProtectedFileShare#create}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#delete BackupProtectedFileShare#delete}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#read BackupProtectedFileShare#read}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#update BackupProtectedFileShare#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#create BackupProtectedFileShare#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#delete BackupProtectedFileShare#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#read BackupProtectedFileShare#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/backup_protected_file_share#update BackupProtectedFileShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupProtectedFileShareTimeoutsOutputReference <a name="BackupProtectedFileShareTimeoutsOutputReference" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backupprotectedfileshare"

backupprotectedfileshare.NewBackupProtectedFileShareTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupProtectedFileShareTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



