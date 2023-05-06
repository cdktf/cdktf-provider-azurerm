# `azurerm_sql_active_directory_administrator`

Refer to the Terraform Registory for docs: [`azurerm_sql_active_directory_administrator`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator).

# `sqlActiveDirectoryAdministrator` Submodule <a name="`sqlActiveDirectoryAdministrator` Submodule" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlActiveDirectoryAdministrator <a name="SqlActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator azurerm_sql_active_directory_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlactivedirectoryadministrator"

sqlactivedirectoryadministrator.NewSqlActiveDirectoryAdministrator(scope Construct, id *string, config SqlActiveDirectoryAdministratorConfig) SqlActiveDirectoryAdministrator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig">SqlActiveDirectoryAdministratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig">SqlActiveDirectoryAdministratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetAzureadAuthenticationOnly">ResetAzureadAuthenticationOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.putTimeouts"></a>

```go
func PutTimeouts(value SqlActiveDirectoryAdministratorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a>

---

##### `ResetAzureadAuthenticationOnly` <a name="ResetAzureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetAzureadAuthenticationOnly"></a>

```go
func ResetAzureadAuthenticationOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlactivedirectoryadministrator"

sqlactivedirectoryadministrator.SqlActiveDirectoryAdministrator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlactivedirectoryadministrator"

sqlactivedirectoryadministrator.SqlActiveDirectoryAdministrator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlactivedirectoryadministrator"

sqlactivedirectoryadministrator.SqlActiveDirectoryAdministrator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference">SqlActiveDirectoryAdministratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.azureadAuthenticationOnlyInput">AzureadAuthenticationOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.loginInput">LoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.azureadAuthenticationOnly">AzureadAuthenticationOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.login">Login</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.timeouts"></a>

```go
func Timeouts() SqlActiveDirectoryAdministratorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference">SqlActiveDirectoryAdministratorTimeoutsOutputReference</a>

---

##### `AzureadAuthenticationOnlyInput`<sup>Optional</sup> <a name="AzureadAuthenticationOnlyInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.azureadAuthenticationOnlyInput"></a>

```go
func AzureadAuthenticationOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.loginInput"></a>

```go
func LoginInput() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AzureadAuthenticationOnly`<sup>Required</sup> <a name="AzureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.azureadAuthenticationOnly"></a>

```go
func AzureadAuthenticationOnly() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.login"></a>

```go
func Login() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlActiveDirectoryAdministratorConfig <a name="SqlActiveDirectoryAdministratorConfig" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlactivedirectoryadministrator"

&sqlactivedirectoryadministrator.SqlActiveDirectoryAdministratorConfig {
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
	AzureadAuthenticationOnly: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.login">Login</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#login SqlActiveDirectoryAdministrator#login}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#object_id SqlActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#resource_group_name SqlActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#server_name SqlActiveDirectoryAdministrator#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#tenant_id SqlActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.azureadAuthenticationOnly">AzureadAuthenticationOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#azuread_authentication_only SqlActiveDirectoryAdministrator#azuread_authentication_only}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#id SqlActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.login"></a>

```go
Login *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#login SqlActiveDirectoryAdministrator#login}.

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#object_id SqlActiveDirectoryAdministrator#object_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#resource_group_name SqlActiveDirectoryAdministrator#resource_group_name}.

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#server_name SqlActiveDirectoryAdministrator#server_name}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#tenant_id SqlActiveDirectoryAdministrator#tenant_id}.

---

##### `AzureadAuthenticationOnly`<sup>Optional</sup> <a name="AzureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.azureadAuthenticationOnly"></a>

```go
AzureadAuthenticationOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#azuread_authentication_only SqlActiveDirectoryAdministrator#azuread_authentication_only}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#id SqlActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.timeouts"></a>

```go
Timeouts SqlActiveDirectoryAdministratorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#timeouts SqlActiveDirectoryAdministrator#timeouts}

---

### SqlActiveDirectoryAdministratorTimeouts <a name="SqlActiveDirectoryAdministratorTimeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlactivedirectoryadministrator"

&sqlactivedirectoryadministrator.SqlActiveDirectoryAdministratorTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#create SqlActiveDirectoryAdministrator#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#delete SqlActiveDirectoryAdministrator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#read SqlActiveDirectoryAdministrator#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#update SqlActiveDirectoryAdministrator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#create SqlActiveDirectoryAdministrator#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#delete SqlActiveDirectoryAdministrator#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#read SqlActiveDirectoryAdministrator#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/sql_active_directory_administrator#update SqlActiveDirectoryAdministrator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlActiveDirectoryAdministratorTimeoutsOutputReference <a name="SqlActiveDirectoryAdministratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlactivedirectoryadministrator"

sqlactivedirectoryadministrator.NewSqlActiveDirectoryAdministratorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlActiveDirectoryAdministratorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



