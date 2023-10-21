# `azurerm_mysql_active_directory_administrator`

Refer to the Terraform Registory for docs: [`azurerm_mysql_active_directory_administrator`](https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator).

# `mysqlActiveDirectoryAdministrator` Submodule <a name="`mysqlActiveDirectoryAdministrator` Submodule" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlActiveDirectoryAdministrator <a name="MysqlActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator azurerm_mysql_active_directory_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mysqlactivedirectoryadministrator"

mysqlactivedirectoryadministrator.NewMysqlActiveDirectoryAdministrator(scope Construct, id *string, config MysqlActiveDirectoryAdministratorConfig) MysqlActiveDirectoryAdministrator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig">MysqlActiveDirectoryAdministratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig">MysqlActiveDirectoryAdministratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.putTimeouts"></a>

```go
func PutTimeouts(value MysqlActiveDirectoryAdministratorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts">MysqlActiveDirectoryAdministratorTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MysqlActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mysqlactivedirectoryadministrator"

mysqlactivedirectoryadministrator.MysqlActiveDirectoryAdministrator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mysqlactivedirectoryadministrator"

mysqlactivedirectoryadministrator.MysqlActiveDirectoryAdministrator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mysqlactivedirectoryadministrator"

mysqlactivedirectoryadministrator.MysqlActiveDirectoryAdministrator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mysqlactivedirectoryadministrator"

mysqlactivedirectoryadministrator.MysqlActiveDirectoryAdministrator_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MysqlActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MysqlActiveDirectoryAdministrator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MysqlActiveDirectoryAdministrator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MysqlActiveDirectoryAdministrator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference">MysqlActiveDirectoryAdministratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.loginInput">LoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.login">Login</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.timeouts"></a>

```go
func Timeouts() MysqlActiveDirectoryAdministratorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference">MysqlActiveDirectoryAdministratorTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.loginInput"></a>

```go
func LoginInput() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.login"></a>

```go
func Login() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministrator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlActiveDirectoryAdministratorConfig <a name="MysqlActiveDirectoryAdministratorConfig" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mysqlactivedirectoryadministrator"

&mysqlactivedirectoryadministrator.MysqlActiveDirectoryAdministratorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Login: *string,
	ObjectId: *string,
	ResourceGroupName: *string,
	ServerName: *string,
	TenantId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.login">Login</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#login MysqlActiveDirectoryAdministrator#login}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#object_id MysqlActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#resource_group_name MysqlActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#server_name MysqlActiveDirectoryAdministrator#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#tenant_id MysqlActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#id MysqlActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts">MysqlActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.login"></a>

```go
Login *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#login MysqlActiveDirectoryAdministrator#login}.

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#object_id MysqlActiveDirectoryAdministrator#object_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#resource_group_name MysqlActiveDirectoryAdministrator#resource_group_name}.

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#server_name MysqlActiveDirectoryAdministrator#server_name}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#tenant_id MysqlActiveDirectoryAdministrator#tenant_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#id MysqlActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorConfig.property.timeouts"></a>

```go
Timeouts MysqlActiveDirectoryAdministratorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts">MysqlActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#timeouts MysqlActiveDirectoryAdministrator#timeouts}

---

### MysqlActiveDirectoryAdministratorTimeouts <a name="MysqlActiveDirectoryAdministratorTimeouts" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mysqlactivedirectoryadministrator"

&mysqlactivedirectoryadministrator.MysqlActiveDirectoryAdministratorTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#create MysqlActiveDirectoryAdministrator#create}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#delete MysqlActiveDirectoryAdministrator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#read MysqlActiveDirectoryAdministrator#read}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#update MysqlActiveDirectoryAdministrator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#create MysqlActiveDirectoryAdministrator#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#delete MysqlActiveDirectoryAdministrator#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#read MysqlActiveDirectoryAdministrator#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/mysql_active_directory_administrator#update MysqlActiveDirectoryAdministrator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlActiveDirectoryAdministratorTimeoutsOutputReference <a name="MysqlActiveDirectoryAdministratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mysqlactivedirectoryadministrator"

mysqlactivedirectoryadministrator.NewMysqlActiveDirectoryAdministratorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MysqlActiveDirectoryAdministratorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mysqlActiveDirectoryAdministrator.MysqlActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



