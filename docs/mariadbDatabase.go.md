# `azurerm_mariadb_database`

Refer to the Terraform Registory for docs: [`azurerm_mariadb_database`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database).

# `mariadbDatabase` Submodule <a name="`mariadbDatabase` Submodule" id="@cdktf/provider-azurerm.mariadbDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MariadbDatabase <a name="MariadbDatabase" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database azurerm_mariadb_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mariadbdatabase"

mariadbdatabase.NewMariadbDatabase(scope Construct, id *string, config MariadbDatabaseConfig) MariadbDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig">MariadbDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig">MariadbDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.putTimeouts"></a>

```go
func PutTimeouts(value MariadbDatabaseTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeouts">MariadbDatabaseTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mariadbdatabase"

mariadbdatabase.MariadbDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mariadbdatabase"

mariadbdatabase.MariadbDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mariadbdatabase"

mariadbdatabase.MariadbDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference">MariadbDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.charsetInput">CharsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.collationInput">CollationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.charset">Charset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.collation">Collation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.timeouts"></a>

```go
func Timeouts() MariadbDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference">MariadbDatabaseTimeoutsOutputReference</a>

---

##### `CharsetInput`<sup>Optional</sup> <a name="CharsetInput" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.charsetInput"></a>

```go
func CharsetInput() *string
```

- *Type:* *string

---

##### `CollationInput`<sup>Optional</sup> <a name="CollationInput" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.collationInput"></a>

```go
func CollationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Charset`<sup>Required</sup> <a name="Charset" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.charset"></a>

```go
func Charset() *string
```

- *Type:* *string

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.collation"></a>

```go
func Collation() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MariadbDatabaseConfig <a name="MariadbDatabaseConfig" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mariadbdatabase"

&mariadbdatabase.MariadbDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Charset: *string,
	Collation: *string,
	Name: *string,
	ResourceGroupName: *string,
	ServerName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mariadbDatabase.MariadbDatabaseTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.charset">Charset</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#charset MariadbDatabase#charset}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.collation">Collation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#collation MariadbDatabase#collation}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#name MariadbDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#resource_group_name MariadbDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#server_name MariadbDatabase#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#id MariadbDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeouts">MariadbDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Charset`<sup>Required</sup> <a name="Charset" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.charset"></a>

```go
Charset *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#charset MariadbDatabase#charset}.

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.collation"></a>

```go
Collation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#collation MariadbDatabase#collation}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#name MariadbDatabase#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#resource_group_name MariadbDatabase#resource_group_name}.

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#server_name MariadbDatabase#server_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#id MariadbDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseConfig.property.timeouts"></a>

```go
Timeouts MariadbDatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeouts">MariadbDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#timeouts MariadbDatabase#timeouts}

---

### MariadbDatabaseTimeouts <a name="MariadbDatabaseTimeouts" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mariadbdatabase"

&mariadbdatabase.MariadbDatabaseTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#create MariadbDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#delete MariadbDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#read MariadbDatabase#read}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#update MariadbDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#create MariadbDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#delete MariadbDatabase#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#read MariadbDatabase#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mariadb_database#update MariadbDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MariadbDatabaseTimeoutsOutputReference <a name="MariadbDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mariadbdatabase"

mariadbdatabase.NewMariadbDatabaseTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MariadbDatabaseTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mariadbDatabase.MariadbDatabaseTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



