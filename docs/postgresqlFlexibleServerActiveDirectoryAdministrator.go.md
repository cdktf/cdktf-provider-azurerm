# `azurerm_postgresql_flexible_server_active_directory_administrator`

Refer to the Terraform Registory for docs: [`azurerm_postgresql_flexible_server_active_directory_administrator`](https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator).

# `postgresqlFlexibleServerActiveDirectoryAdministrator` Submodule <a name="`postgresqlFlexibleServerActiveDirectoryAdministrator` Submodule" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlFlexibleServerActiveDirectoryAdministrator <a name="PostgresqlFlexibleServerActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator azurerm_postgresql_flexible_server_active_directory_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/postgresqlflexibleserveractivedirectoryadministrator"

postgresqlflexibleserveractivedirectoryadministrator.NewPostgresqlFlexibleServerActiveDirectoryAdministrator(scope Construct, id *string, config PostgresqlFlexibleServerActiveDirectoryAdministratorConfig) PostgresqlFlexibleServerActiveDirectoryAdministrator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig">PostgresqlFlexibleServerActiveDirectoryAdministratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig">PostgresqlFlexibleServerActiveDirectoryAdministratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.putTimeouts"></a>

```go
func PutTimeouts(value PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/postgresqlflexibleserveractivedirectoryadministrator"

postgresqlflexibleserveractivedirectoryadministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/postgresqlflexibleserveractivedirectoryadministrator"

postgresqlflexibleserveractivedirectoryadministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/postgresqlflexibleserveractivedirectoryadministrator"

postgresqlflexibleserveractivedirectoryadministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalNameInput">PrincipalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalName">PrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.timeouts"></a>

```go
func Timeouts() PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `PrincipalNameInput`<sup>Optional</sup> <a name="PrincipalNameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalNameInput"></a>

```go
func PrincipalNameInput() *string
```

- *Type:* *string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalTypeInput"></a>

```go
func PrincipalTypeInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `PrincipalName`<sup>Required</sup> <a name="PrincipalName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalName"></a>

```go
func PrincipalName() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministrator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlFlexibleServerActiveDirectoryAdministratorConfig <a name="PostgresqlFlexibleServerActiveDirectoryAdministratorConfig" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/postgresqlflexibleserveractivedirectoryadministrator"

&postgresqlflexibleserveractivedirectoryadministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ObjectId: *string,
	PrincipalName: *string,
	PrincipalType: *string,
	ResourceGroupName: *string,
	ServerName: *string,
	TenantId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#object_id PostgresqlFlexibleServerActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.principalName">PrincipalName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_name PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.principalType">PrincipalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_type PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#resource_group_name PostgresqlFlexibleServerActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#server_name PostgresqlFlexibleServerActiveDirectoryAdministrator#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#tenant_id PostgresqlFlexibleServerActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#id PostgresqlFlexibleServerActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#object_id PostgresqlFlexibleServerActiveDirectoryAdministrator#object_id}.

---

##### `PrincipalName`<sup>Required</sup> <a name="PrincipalName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.principalName"></a>

```go
PrincipalName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_name PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_name}.

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.principalType"></a>

```go
PrincipalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#principal_type PostgresqlFlexibleServerActiveDirectoryAdministrator#principal_type}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#resource_group_name PostgresqlFlexibleServerActiveDirectoryAdministrator#resource_group_name}.

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#server_name PostgresqlFlexibleServerActiveDirectoryAdministrator#server_name}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#tenant_id PostgresqlFlexibleServerActiveDirectoryAdministrator#tenant_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#id PostgresqlFlexibleServerActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorConfig.property.timeouts"></a>

```go
Timeouts PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts">PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#timeouts PostgresqlFlexibleServerActiveDirectoryAdministrator#timeouts}

---

### PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts <a name="PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/postgresqlflexibleserveractivedirectoryadministrator"

&postgresqlflexibleserveractivedirectoryadministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#create PostgresqlFlexibleServerActiveDirectoryAdministrator#create}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#delete PostgresqlFlexibleServerActiveDirectoryAdministrator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#read PostgresqlFlexibleServerActiveDirectoryAdministrator#read}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#update PostgresqlFlexibleServerActiveDirectoryAdministrator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#create PostgresqlFlexibleServerActiveDirectoryAdministrator#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#delete PostgresqlFlexibleServerActiveDirectoryAdministrator#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#read PostgresqlFlexibleServerActiveDirectoryAdministrator#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/postgresql_flexible_server_active_directory_administrator#update PostgresqlFlexibleServerActiveDirectoryAdministrator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference <a name="PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/postgresqlflexibleserveractivedirectoryadministrator"

postgresqlflexibleserveractivedirectoryadministrator.NewPostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.postgresqlFlexibleServerActiveDirectoryAdministrator.PostgresqlFlexibleServerActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



