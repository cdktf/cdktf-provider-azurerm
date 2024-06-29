# `springCloudAppCosmosdbAssociation` Submodule <a name="`springCloudAppCosmosdbAssociation` Submodule" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudAppCosmosdbAssociation <a name="SpringCloudAppCosmosdbAssociation" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association azurerm_spring_cloud_app_cosmosdb_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/springcloudappcosmosdbassociation"

springcloudappcosmosdbassociation.NewSpringCloudAppCosmosdbAssociation(scope Construct, id *string, config SpringCloudAppCosmosdbAssociationConfig) SpringCloudAppCosmosdbAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig">SpringCloudAppCosmosdbAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig">SpringCloudAppCosmosdbAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.resetCosmosdbCassandraKeyspaceName">ResetCosmosdbCassandraKeyspaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.resetCosmosdbGremlinDatabaseName">ResetCosmosdbGremlinDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.resetCosmosdbGremlinGraphName">ResetCosmosdbGremlinGraphName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.resetCosmosdbMongoDatabaseName">ResetCosmosdbMongoDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.resetCosmosdbSqlDatabaseName">ResetCosmosdbSqlDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.putTimeouts"></a>

```go
func PutTimeouts(value SpringCloudAppCosmosdbAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeouts">SpringCloudAppCosmosdbAssociationTimeouts</a>

---

##### `ResetCosmosdbCassandraKeyspaceName` <a name="ResetCosmosdbCassandraKeyspaceName" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.resetCosmosdbCassandraKeyspaceName"></a>

```go
func ResetCosmosdbCassandraKeyspaceName()
```

##### `ResetCosmosdbGremlinDatabaseName` <a name="ResetCosmosdbGremlinDatabaseName" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.resetCosmosdbGremlinDatabaseName"></a>

```go
func ResetCosmosdbGremlinDatabaseName()
```

##### `ResetCosmosdbGremlinGraphName` <a name="ResetCosmosdbGremlinGraphName" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.resetCosmosdbGremlinGraphName"></a>

```go
func ResetCosmosdbGremlinGraphName()
```

##### `ResetCosmosdbMongoDatabaseName` <a name="ResetCosmosdbMongoDatabaseName" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.resetCosmosdbMongoDatabaseName"></a>

```go
func ResetCosmosdbMongoDatabaseName()
```

##### `ResetCosmosdbSqlDatabaseName` <a name="ResetCosmosdbSqlDatabaseName" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.resetCosmosdbSqlDatabaseName"></a>

```go
func ResetCosmosdbSqlDatabaseName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudAppCosmosdbAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/springcloudappcosmosdbassociation"

springcloudappcosmosdbassociation.SpringCloudAppCosmosdbAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/springcloudappcosmosdbassociation"

springcloudappcosmosdbassociation.SpringCloudAppCosmosdbAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/springcloudappcosmosdbassociation"

springcloudappcosmosdbassociation.SpringCloudAppCosmosdbAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/springcloudappcosmosdbassociation"

springcloudappcosmosdbassociation.SpringCloudAppCosmosdbAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SpringCloudAppCosmosdbAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SpringCloudAppCosmosdbAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SpringCloudAppCosmosdbAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudAppCosmosdbAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference">SpringCloudAppCosmosdbAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.apiTypeInput">ApiTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbAccessKeyInput">CosmosdbAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbAccountIdInput">CosmosdbAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbCassandraKeyspaceNameInput">CosmosdbCassandraKeyspaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbGremlinDatabaseNameInput">CosmosdbGremlinDatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbGremlinGraphNameInput">CosmosdbGremlinGraphNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbMongoDatabaseNameInput">CosmosdbMongoDatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbSqlDatabaseNameInput">CosmosdbSqlDatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.springCloudAppIdInput">SpringCloudAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.apiType">ApiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbAccessKey">CosmosdbAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbAccountId">CosmosdbAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbCassandraKeyspaceName">CosmosdbCassandraKeyspaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbGremlinDatabaseName">CosmosdbGremlinDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbGremlinGraphName">CosmosdbGremlinGraphName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbMongoDatabaseName">CosmosdbMongoDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbSqlDatabaseName">CosmosdbSqlDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.springCloudAppId">SpringCloudAppId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.timeouts"></a>

```go
func Timeouts() SpringCloudAppCosmosdbAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference">SpringCloudAppCosmosdbAssociationTimeoutsOutputReference</a>

---

##### `ApiTypeInput`<sup>Optional</sup> <a name="ApiTypeInput" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.apiTypeInput"></a>

```go
func ApiTypeInput() *string
```

- *Type:* *string

---

##### `CosmosdbAccessKeyInput`<sup>Optional</sup> <a name="CosmosdbAccessKeyInput" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbAccessKeyInput"></a>

```go
func CosmosdbAccessKeyInput() *string
```

- *Type:* *string

---

##### `CosmosdbAccountIdInput`<sup>Optional</sup> <a name="CosmosdbAccountIdInput" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbAccountIdInput"></a>

```go
func CosmosdbAccountIdInput() *string
```

- *Type:* *string

---

##### `CosmosdbCassandraKeyspaceNameInput`<sup>Optional</sup> <a name="CosmosdbCassandraKeyspaceNameInput" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbCassandraKeyspaceNameInput"></a>

```go
func CosmosdbCassandraKeyspaceNameInput() *string
```

- *Type:* *string

---

##### `CosmosdbGremlinDatabaseNameInput`<sup>Optional</sup> <a name="CosmosdbGremlinDatabaseNameInput" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbGremlinDatabaseNameInput"></a>

```go
func CosmosdbGremlinDatabaseNameInput() *string
```

- *Type:* *string

---

##### `CosmosdbGremlinGraphNameInput`<sup>Optional</sup> <a name="CosmosdbGremlinGraphNameInput" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbGremlinGraphNameInput"></a>

```go
func CosmosdbGremlinGraphNameInput() *string
```

- *Type:* *string

---

##### `CosmosdbMongoDatabaseNameInput`<sup>Optional</sup> <a name="CosmosdbMongoDatabaseNameInput" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbMongoDatabaseNameInput"></a>

```go
func CosmosdbMongoDatabaseNameInput() *string
```

- *Type:* *string

---

##### `CosmosdbSqlDatabaseNameInput`<sup>Optional</sup> <a name="CosmosdbSqlDatabaseNameInput" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbSqlDatabaseNameInput"></a>

```go
func CosmosdbSqlDatabaseNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SpringCloudAppIdInput`<sup>Optional</sup> <a name="SpringCloudAppIdInput" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.springCloudAppIdInput"></a>

```go
func SpringCloudAppIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.apiType"></a>

```go
func ApiType() *string
```

- *Type:* *string

---

##### `CosmosdbAccessKey`<sup>Required</sup> <a name="CosmosdbAccessKey" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbAccessKey"></a>

```go
func CosmosdbAccessKey() *string
```

- *Type:* *string

---

##### `CosmosdbAccountId`<sup>Required</sup> <a name="CosmosdbAccountId" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbAccountId"></a>

```go
func CosmosdbAccountId() *string
```

- *Type:* *string

---

##### `CosmosdbCassandraKeyspaceName`<sup>Required</sup> <a name="CosmosdbCassandraKeyspaceName" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbCassandraKeyspaceName"></a>

```go
func CosmosdbCassandraKeyspaceName() *string
```

- *Type:* *string

---

##### `CosmosdbGremlinDatabaseName`<sup>Required</sup> <a name="CosmosdbGremlinDatabaseName" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbGremlinDatabaseName"></a>

```go
func CosmosdbGremlinDatabaseName() *string
```

- *Type:* *string

---

##### `CosmosdbGremlinGraphName`<sup>Required</sup> <a name="CosmosdbGremlinGraphName" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbGremlinGraphName"></a>

```go
func CosmosdbGremlinGraphName() *string
```

- *Type:* *string

---

##### `CosmosdbMongoDatabaseName`<sup>Required</sup> <a name="CosmosdbMongoDatabaseName" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbMongoDatabaseName"></a>

```go
func CosmosdbMongoDatabaseName() *string
```

- *Type:* *string

---

##### `CosmosdbSqlDatabaseName`<sup>Required</sup> <a name="CosmosdbSqlDatabaseName" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.cosmosdbSqlDatabaseName"></a>

```go
func CosmosdbSqlDatabaseName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SpringCloudAppId`<sup>Required</sup> <a name="SpringCloudAppId" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.springCloudAppId"></a>

```go
func SpringCloudAppId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudAppCosmosdbAssociationConfig <a name="SpringCloudAppCosmosdbAssociationConfig" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/springcloudappcosmosdbassociation"

&springcloudappcosmosdbassociation.SpringCloudAppCosmosdbAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiType: *string,
	CosmosdbAccessKey: *string,
	CosmosdbAccountId: *string,
	Name: *string,
	SpringCloudAppId: *string,
	CosmosdbCassandraKeyspaceName: *string,
	CosmosdbGremlinDatabaseName: *string,
	CosmosdbGremlinGraphName: *string,
	CosmosdbMongoDatabaseName: *string,
	CosmosdbSqlDatabaseName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.apiType">ApiType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#api_type SpringCloudAppCosmosdbAssociation#api_type}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.cosmosdbAccessKey">CosmosdbAccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#cosmosdb_access_key SpringCloudAppCosmosdbAssociation#cosmosdb_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.cosmosdbAccountId">CosmosdbAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#cosmosdb_account_id SpringCloudAppCosmosdbAssociation#cosmosdb_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#name SpringCloudAppCosmosdbAssociation#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.springCloudAppId">SpringCloudAppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#spring_cloud_app_id SpringCloudAppCosmosdbAssociation#spring_cloud_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.cosmosdbCassandraKeyspaceName">CosmosdbCassandraKeyspaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#cosmosdb_cassandra_keyspace_name SpringCloudAppCosmosdbAssociation#cosmosdb_cassandra_keyspace_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.cosmosdbGremlinDatabaseName">CosmosdbGremlinDatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#cosmosdb_gremlin_database_name SpringCloudAppCosmosdbAssociation#cosmosdb_gremlin_database_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.cosmosdbGremlinGraphName">CosmosdbGremlinGraphName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#cosmosdb_gremlin_graph_name SpringCloudAppCosmosdbAssociation#cosmosdb_gremlin_graph_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.cosmosdbMongoDatabaseName">CosmosdbMongoDatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#cosmosdb_mongo_database_name SpringCloudAppCosmosdbAssociation#cosmosdb_mongo_database_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.cosmosdbSqlDatabaseName">CosmosdbSqlDatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#cosmosdb_sql_database_name SpringCloudAppCosmosdbAssociation#cosmosdb_sql_database_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#id SpringCloudAppCosmosdbAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeouts">SpringCloudAppCosmosdbAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.apiType"></a>

```go
ApiType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#api_type SpringCloudAppCosmosdbAssociation#api_type}.

---

##### `CosmosdbAccessKey`<sup>Required</sup> <a name="CosmosdbAccessKey" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.cosmosdbAccessKey"></a>

```go
CosmosdbAccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#cosmosdb_access_key SpringCloudAppCosmosdbAssociation#cosmosdb_access_key}.

---

##### `CosmosdbAccountId`<sup>Required</sup> <a name="CosmosdbAccountId" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.cosmosdbAccountId"></a>

```go
CosmosdbAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#cosmosdb_account_id SpringCloudAppCosmosdbAssociation#cosmosdb_account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#name SpringCloudAppCosmosdbAssociation#name}.

---

##### `SpringCloudAppId`<sup>Required</sup> <a name="SpringCloudAppId" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.springCloudAppId"></a>

```go
SpringCloudAppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#spring_cloud_app_id SpringCloudAppCosmosdbAssociation#spring_cloud_app_id}.

---

##### `CosmosdbCassandraKeyspaceName`<sup>Optional</sup> <a name="CosmosdbCassandraKeyspaceName" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.cosmosdbCassandraKeyspaceName"></a>

```go
CosmosdbCassandraKeyspaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#cosmosdb_cassandra_keyspace_name SpringCloudAppCosmosdbAssociation#cosmosdb_cassandra_keyspace_name}.

---

##### `CosmosdbGremlinDatabaseName`<sup>Optional</sup> <a name="CosmosdbGremlinDatabaseName" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.cosmosdbGremlinDatabaseName"></a>

```go
CosmosdbGremlinDatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#cosmosdb_gremlin_database_name SpringCloudAppCosmosdbAssociation#cosmosdb_gremlin_database_name}.

---

##### `CosmosdbGremlinGraphName`<sup>Optional</sup> <a name="CosmosdbGremlinGraphName" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.cosmosdbGremlinGraphName"></a>

```go
CosmosdbGremlinGraphName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#cosmosdb_gremlin_graph_name SpringCloudAppCosmosdbAssociation#cosmosdb_gremlin_graph_name}.

---

##### `CosmosdbMongoDatabaseName`<sup>Optional</sup> <a name="CosmosdbMongoDatabaseName" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.cosmosdbMongoDatabaseName"></a>

```go
CosmosdbMongoDatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#cosmosdb_mongo_database_name SpringCloudAppCosmosdbAssociation#cosmosdb_mongo_database_name}.

---

##### `CosmosdbSqlDatabaseName`<sup>Optional</sup> <a name="CosmosdbSqlDatabaseName" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.cosmosdbSqlDatabaseName"></a>

```go
CosmosdbSqlDatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#cosmosdb_sql_database_name SpringCloudAppCosmosdbAssociation#cosmosdb_sql_database_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#id SpringCloudAppCosmosdbAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationConfig.property.timeouts"></a>

```go
Timeouts SpringCloudAppCosmosdbAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeouts">SpringCloudAppCosmosdbAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#timeouts SpringCloudAppCosmosdbAssociation#timeouts}

---

### SpringCloudAppCosmosdbAssociationTimeouts <a name="SpringCloudAppCosmosdbAssociationTimeouts" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/springcloudappcosmosdbassociation"

&springcloudappcosmosdbassociation.SpringCloudAppCosmosdbAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#create SpringCloudAppCosmosdbAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#delete SpringCloudAppCosmosdbAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#read SpringCloudAppCosmosdbAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#update SpringCloudAppCosmosdbAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#create SpringCloudAppCosmosdbAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#delete SpringCloudAppCosmosdbAssociation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#read SpringCloudAppCosmosdbAssociation#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/spring_cloud_app_cosmosdb_association#update SpringCloudAppCosmosdbAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudAppCosmosdbAssociationTimeoutsOutputReference <a name="SpringCloudAppCosmosdbAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/springcloudappcosmosdbassociation"

springcloudappcosmosdbassociation.NewSpringCloudAppCosmosdbAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudAppCosmosdbAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudAppCosmosdbAssociation.SpringCloudAppCosmosdbAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



