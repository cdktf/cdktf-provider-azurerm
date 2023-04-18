# `azurerm_sql_elasticpool`

Refer to the Terraform Registory for docs: [`azurerm_sql_elasticpool`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool).

# `sqlElasticpool` Submodule <a name="`sqlElasticpool` Submodule" id="@cdktf/provider-azurerm.sqlElasticpool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlElasticpool <a name="SqlElasticpool" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool azurerm_sql_elasticpool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sqlelasticpool"

sqlelasticpool.NewSqlElasticpool(scope Construct, id *string, config SqlElasticpoolConfig) SqlElasticpool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig">SqlElasticpoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig">SqlElasticpoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.resetDbDtuMax">ResetDbDtuMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.resetDbDtuMin">ResetDbDtuMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.resetPoolSize">ResetPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.putTimeouts"></a>

```go
func PutTimeouts(value SqlElasticpoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeouts">SqlElasticpoolTimeouts</a>

---

##### `ResetDbDtuMax` <a name="ResetDbDtuMax" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.resetDbDtuMax"></a>

```go
func ResetDbDtuMax()
```

##### `ResetDbDtuMin` <a name="ResetDbDtuMin" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.resetDbDtuMin"></a>

```go
func ResetDbDtuMin()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.resetId"></a>

```go
func ResetId()
```

##### `ResetPoolSize` <a name="ResetPoolSize" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.resetPoolSize"></a>

```go
func ResetPoolSize()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sqlelasticpool"

sqlelasticpool.SqlElasticpool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sqlelasticpool"

sqlelasticpool.SqlElasticpool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sqlelasticpool"

sqlelasticpool.SqlElasticpool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference">SqlElasticpoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.dbDtuMaxInput">DbDtuMaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.dbDtuMinInput">DbDtuMinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.dtuInput">DtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.editionInput">EditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.poolSizeInput">PoolSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.dbDtuMax">DbDtuMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.dbDtuMin">DbDtuMin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.dtu">Dtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.poolSize">PoolSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.timeouts"></a>

```go
func Timeouts() SqlElasticpoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference">SqlElasticpoolTimeoutsOutputReference</a>

---

##### `DbDtuMaxInput`<sup>Optional</sup> <a name="DbDtuMaxInput" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.dbDtuMaxInput"></a>

```go
func DbDtuMaxInput() *f64
```

- *Type:* *f64

---

##### `DbDtuMinInput`<sup>Optional</sup> <a name="DbDtuMinInput" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.dbDtuMinInput"></a>

```go
func DbDtuMinInput() *f64
```

- *Type:* *f64

---

##### `DtuInput`<sup>Optional</sup> <a name="DtuInput" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.dtuInput"></a>

```go
func DtuInput() *f64
```

- *Type:* *f64

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.editionInput"></a>

```go
func EditionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PoolSizeInput`<sup>Optional</sup> <a name="PoolSizeInput" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.poolSizeInput"></a>

```go
func PoolSizeInput() *f64
```

- *Type:* *f64

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DbDtuMax`<sup>Required</sup> <a name="DbDtuMax" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.dbDtuMax"></a>

```go
func DbDtuMax() *f64
```

- *Type:* *f64

---

##### `DbDtuMin`<sup>Required</sup> <a name="DbDtuMin" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.dbDtuMin"></a>

```go
func DbDtuMin() *f64
```

- *Type:* *f64

---

##### `Dtu`<sup>Required</sup> <a name="Dtu" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.dtu"></a>

```go
func Dtu() *f64
```

- *Type:* *f64

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PoolSize`<sup>Required</sup> <a name="PoolSize" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.poolSize"></a>

```go
func PoolSize() *f64
```

- *Type:* *f64

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlElasticpoolConfig <a name="SqlElasticpoolConfig" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sqlelasticpool"

&sqlelasticpool.SqlElasticpoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Dtu: *f64,
	Edition: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	ServerName: *string,
	DbDtuMax: *f64,
	DbDtuMin: *f64,
	Id: *string,
	PoolSize: *f64,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.sqlElasticpool.SqlElasticpoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.dtu">Dtu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#dtu SqlElasticpool#dtu}. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.edition">Edition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#edition SqlElasticpool#edition}. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#location SqlElasticpool#location}. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#name SqlElasticpool#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#resource_group_name SqlElasticpool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#server_name SqlElasticpool#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.dbDtuMax">DbDtuMax</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#db_dtu_max SqlElasticpool#db_dtu_max}. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.dbDtuMin">DbDtuMin</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#db_dtu_min SqlElasticpool#db_dtu_min}. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#id SqlElasticpool#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.poolSize">PoolSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#pool_size SqlElasticpool#pool_size}. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#tags SqlElasticpool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeouts">SqlElasticpoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Dtu`<sup>Required</sup> <a name="Dtu" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.dtu"></a>

```go
Dtu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#dtu SqlElasticpool#dtu}.

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.edition"></a>

```go
Edition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#edition SqlElasticpool#edition}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#location SqlElasticpool#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#name SqlElasticpool#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#resource_group_name SqlElasticpool#resource_group_name}.

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#server_name SqlElasticpool#server_name}.

---

##### `DbDtuMax`<sup>Optional</sup> <a name="DbDtuMax" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.dbDtuMax"></a>

```go
DbDtuMax *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#db_dtu_max SqlElasticpool#db_dtu_max}.

---

##### `DbDtuMin`<sup>Optional</sup> <a name="DbDtuMin" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.dbDtuMin"></a>

```go
DbDtuMin *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#db_dtu_min SqlElasticpool#db_dtu_min}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#id SqlElasticpool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PoolSize`<sup>Optional</sup> <a name="PoolSize" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.poolSize"></a>

```go
PoolSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#pool_size SqlElasticpool#pool_size}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#tags SqlElasticpool#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolConfig.property.timeouts"></a>

```go
Timeouts SqlElasticpoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeouts">SqlElasticpoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#timeouts SqlElasticpool#timeouts}

---

### SqlElasticpoolTimeouts <a name="SqlElasticpoolTimeouts" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sqlelasticpool"

&sqlelasticpool.SqlElasticpoolTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#create SqlElasticpool#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#delete SqlElasticpool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#read SqlElasticpool#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#update SqlElasticpool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#create SqlElasticpool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#delete SqlElasticpool#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#read SqlElasticpool#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/sql_elasticpool#update SqlElasticpool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlElasticpoolTimeoutsOutputReference <a name="SqlElasticpoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/sqlelasticpool"

sqlelasticpool.NewSqlElasticpoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlElasticpoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sqlElasticpool.SqlElasticpoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



