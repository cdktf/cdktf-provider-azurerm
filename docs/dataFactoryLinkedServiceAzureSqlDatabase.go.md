# `dataFactoryLinkedServiceAzureSqlDatabase` Submodule <a name="`dataFactoryLinkedServiceAzureSqlDatabase` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceAzureSqlDatabase <a name="DataFactoryLinkedServiceAzureSqlDatabase" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database azurerm_data_factory_linked_service_azure_sql_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedserviceazuresqldatabase"

datafactorylinkedserviceazuresqldatabase.NewDataFactoryLinkedServiceAzureSqlDatabase(scope Construct, id *string, config DataFactoryLinkedServiceAzureSqlDatabaseConfig) DataFactoryLinkedServiceAzureSqlDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig">DataFactoryLinkedServiceAzureSqlDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig">DataFactoryLinkedServiceAzureSqlDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putKeyVaultConnectionString">PutKeyVaultConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putKeyVaultPassword">PutKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetCredentialName">ResetCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetIntegrationRuntimeName">ResetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetKeyVaultConnectionString">ResetKeyVaultConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetKeyVaultPassword">ResetKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetServicePrincipalId">ResetServicePrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetServicePrincipalKey">ResetServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetUseManagedIdentity">ResetUseManagedIdentity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKeyVaultConnectionString` <a name="PutKeyVaultConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putKeyVaultConnectionString"></a>

```go
func PutKeyVaultConnectionString(value DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putKeyVaultConnectionString.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString</a>

---

##### `PutKeyVaultPassword` <a name="PutKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putKeyVaultPassword"></a>

```go
func PutKeyVaultPassword(value DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putKeyVaultPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryLinkedServiceAzureSqlDatabaseTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts">DataFactoryLinkedServiceAzureSqlDatabaseTimeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetAdditionalProperties"></a>

```go
func ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetConnectionString"></a>

```go
func ResetConnectionString()
```

##### `ResetCredentialName` <a name="ResetCredentialName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetCredentialName"></a>

```go
func ResetCredentialName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetId"></a>

```go
func ResetId()
```

##### `ResetIntegrationRuntimeName` <a name="ResetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetIntegrationRuntimeName"></a>

```go
func ResetIntegrationRuntimeName()
```

##### `ResetKeyVaultConnectionString` <a name="ResetKeyVaultConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetKeyVaultConnectionString"></a>

```go
func ResetKeyVaultConnectionString()
```

##### `ResetKeyVaultPassword` <a name="ResetKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetKeyVaultPassword"></a>

```go
func ResetKeyVaultPassword()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetServicePrincipalId` <a name="ResetServicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetServicePrincipalId"></a>

```go
func ResetServicePrincipalId()
```

##### `ResetServicePrincipalKey` <a name="ResetServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetServicePrincipalKey"></a>

```go
func ResetServicePrincipalKey()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUseManagedIdentity` <a name="ResetUseManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetUseManagedIdentity"></a>

```go
func ResetUseManagedIdentity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceAzureSqlDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedserviceazuresqldatabase"

datafactorylinkedserviceazuresqldatabase.DataFactoryLinkedServiceAzureSqlDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedserviceazuresqldatabase"

datafactorylinkedserviceazuresqldatabase.DataFactoryLinkedServiceAzureSqlDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedserviceazuresqldatabase"

datafactorylinkedserviceazuresqldatabase.DataFactoryLinkedServiceAzureSqlDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedserviceazuresqldatabase"

datafactorylinkedserviceazuresqldatabase.DataFactoryLinkedServiceAzureSqlDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataFactoryLinkedServiceAzureSqlDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataFactoryLinkedServiceAzureSqlDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataFactoryLinkedServiceAzureSqlDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceAzureSqlDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.keyVaultConnectionString">KeyVaultConnectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.keyVaultPassword">KeyVaultPassword</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference">DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.annotationsInput">AnnotationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.connectionStringInput">ConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.credentialNameInput">CredentialNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.integrationRuntimeNameInput">IntegrationRuntimeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.keyVaultConnectionStringInput">KeyVaultConnectionStringInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.keyVaultPasswordInput">KeyVaultPasswordInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.servicePrincipalKeyInput">ServicePrincipalKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.useManagedIdentityInput">UseManagedIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.annotations">Annotations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.credentialName">CredentialName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.servicePrincipalKey">ServicePrincipalKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.useManagedIdentity">UseManagedIdentity</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyVaultConnectionString`<sup>Required</sup> <a name="KeyVaultConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.keyVaultConnectionString"></a>

```go
func KeyVaultConnectionString() DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference</a>

---

##### `KeyVaultPassword`<sup>Required</sup> <a name="KeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.keyVaultPassword"></a>

```go
func KeyVaultPassword() DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.timeouts"></a>

```go
func Timeouts() DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference">DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.additionalPropertiesInput"></a>

```go
func AdditionalPropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.annotationsInput"></a>

```go
func AnnotationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.connectionStringInput"></a>

```go
func ConnectionStringInput() *string
```

- *Type:* *string

---

##### `CredentialNameInput`<sup>Optional</sup> <a name="CredentialNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.credentialNameInput"></a>

```go
func CredentialNameInput() *string
```

- *Type:* *string

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationRuntimeNameInput`<sup>Optional</sup> <a name="IntegrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.integrationRuntimeNameInput"></a>

```go
func IntegrationRuntimeNameInput() *string
```

- *Type:* *string

---

##### `KeyVaultConnectionStringInput`<sup>Optional</sup> <a name="KeyVaultConnectionStringInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.keyVaultConnectionStringInput"></a>

```go
func KeyVaultConnectionStringInput() DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString</a>

---

##### `KeyVaultPasswordInput`<sup>Optional</sup> <a name="KeyVaultPasswordInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.keyVaultPasswordInput"></a>

```go
func KeyVaultPasswordInput() DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.servicePrincipalIdInput"></a>

```go
func ServicePrincipalIdInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalKeyInput`<sup>Optional</sup> <a name="ServicePrincipalKeyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.servicePrincipalKeyInput"></a>

```go
func ServicePrincipalKeyInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UseManagedIdentityInput`<sup>Optional</sup> <a name="UseManagedIdentityInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.useManagedIdentityInput"></a>

```go
func UseManagedIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.additionalProperties"></a>

```go
func AdditionalProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.annotations"></a>

```go
func Annotations() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.credentialName"></a>

```go
func CredentialName() *string
```

- *Type:* *string

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationRuntimeName`<sup>Required</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.integrationRuntimeName"></a>

```go
func IntegrationRuntimeName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.servicePrincipalId"></a>

```go
func ServicePrincipalId() *string
```

- *Type:* *string

---

##### `ServicePrincipalKey`<sup>Required</sup> <a name="ServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.servicePrincipalKey"></a>

```go
func ServicePrincipalKey() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `UseManagedIdentity`<sup>Required</sup> <a name="UseManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.useManagedIdentity"></a>

```go
func UseManagedIdentity() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceAzureSqlDatabaseConfig <a name="DataFactoryLinkedServiceAzureSqlDatabaseConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedserviceazuresqldatabase"

&datafactorylinkedserviceazuresqldatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataFactoryId: *string,
	Name: *string,
	AdditionalProperties: *map[string]*string,
	Annotations: *[]*string,
	ConnectionString: *string,
	CredentialName: *string,
	Description: *string,
	Id: *string,
	IntegrationRuntimeName: *string,
	KeyVaultConnectionString: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString,
	KeyVaultPassword: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword,
	Parameters: *map[string]*string,
	ServicePrincipalId: *string,
	ServicePrincipalKey: *string,
	TenantId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts,
	UseManagedIdentity: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#data_factory_id DataFactoryLinkedServiceAzureSqlDatabase#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#name DataFactoryLinkedServiceAzureSqlDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#additional_properties DataFactoryLinkedServiceAzureSqlDatabase#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.annotations">Annotations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#annotations DataFactoryLinkedServiceAzureSqlDatabase#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.connectionString">ConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#connection_string DataFactoryLinkedServiceAzureSqlDatabase#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.credentialName">CredentialName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#credential_name DataFactoryLinkedServiceAzureSqlDatabase#credential_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#description DataFactoryLinkedServiceAzureSqlDatabase#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#id DataFactoryLinkedServiceAzureSqlDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#integration_runtime_name DataFactoryLinkedServiceAzureSqlDatabase#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.keyVaultConnectionString">KeyVaultConnectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString</a></code> | key_vault_connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.keyVaultPassword">KeyVaultPassword</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword</a></code> | key_vault_password block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#parameters DataFactoryLinkedServiceAzureSqlDatabase#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#service_principal_id DataFactoryLinkedServiceAzureSqlDatabase#service_principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.servicePrincipalKey">ServicePrincipalKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#service_principal_key DataFactoryLinkedServiceAzureSqlDatabase#service_principal_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#tenant_id DataFactoryLinkedServiceAzureSqlDatabase#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts">DataFactoryLinkedServiceAzureSqlDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.useManagedIdentity">UseManagedIdentity</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#use_managed_identity DataFactoryLinkedServiceAzureSqlDatabase#use_managed_identity}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#data_factory_id DataFactoryLinkedServiceAzureSqlDatabase#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#name DataFactoryLinkedServiceAzureSqlDatabase#name}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.additionalProperties"></a>

```go
AdditionalProperties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#additional_properties DataFactoryLinkedServiceAzureSqlDatabase#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.annotations"></a>

```go
Annotations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#annotations DataFactoryLinkedServiceAzureSqlDatabase#annotations}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.connectionString"></a>

```go
ConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#connection_string DataFactoryLinkedServiceAzureSqlDatabase#connection_string}.

---

##### `CredentialName`<sup>Optional</sup> <a name="CredentialName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.credentialName"></a>

```go
CredentialName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#credential_name DataFactoryLinkedServiceAzureSqlDatabase#credential_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#description DataFactoryLinkedServiceAzureSqlDatabase#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#id DataFactoryLinkedServiceAzureSqlDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationRuntimeName`<sup>Optional</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.integrationRuntimeName"></a>

```go
IntegrationRuntimeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#integration_runtime_name DataFactoryLinkedServiceAzureSqlDatabase#integration_runtime_name}.

---

##### `KeyVaultConnectionString`<sup>Optional</sup> <a name="KeyVaultConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.keyVaultConnectionString"></a>

```go
KeyVaultConnectionString DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString</a>

key_vault_connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#key_vault_connection_string DataFactoryLinkedServiceAzureSqlDatabase#key_vault_connection_string}

---

##### `KeyVaultPassword`<sup>Optional</sup> <a name="KeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.keyVaultPassword"></a>

```go
KeyVaultPassword DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword</a>

key_vault_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#key_vault_password DataFactoryLinkedServiceAzureSqlDatabase#key_vault_password}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#parameters DataFactoryLinkedServiceAzureSqlDatabase#parameters}.

---

##### `ServicePrincipalId`<sup>Optional</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.servicePrincipalId"></a>

```go
ServicePrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#service_principal_id DataFactoryLinkedServiceAzureSqlDatabase#service_principal_id}.

---

##### `ServicePrincipalKey`<sup>Optional</sup> <a name="ServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.servicePrincipalKey"></a>

```go
ServicePrincipalKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#service_principal_key DataFactoryLinkedServiceAzureSqlDatabase#service_principal_key}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#tenant_id DataFactoryLinkedServiceAzureSqlDatabase#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.timeouts"></a>

```go
Timeouts DataFactoryLinkedServiceAzureSqlDatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts">DataFactoryLinkedServiceAzureSqlDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#timeouts DataFactoryLinkedServiceAzureSqlDatabase#timeouts}

---

##### `UseManagedIdentity`<sup>Optional</sup> <a name="UseManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.useManagedIdentity"></a>

```go
UseManagedIdentity interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#use_managed_identity DataFactoryLinkedServiceAzureSqlDatabase#use_managed_identity}.

---

### DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString <a name="DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedserviceazuresqldatabase"

&datafactorylinkedserviceazuresqldatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString {
	LinkedServiceName: *string,
	SecretName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#linked_service_name DataFactoryLinkedServiceAzureSqlDatabase#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString.property.secretName">SecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#secret_name DataFactoryLinkedServiceAzureSqlDatabase#secret_name}. |

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString.property.linkedServiceName"></a>

```go
LinkedServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#linked_service_name DataFactoryLinkedServiceAzureSqlDatabase#linked_service_name}.

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#secret_name DataFactoryLinkedServiceAzureSqlDatabase#secret_name}.

---

### DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword <a name="DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedserviceazuresqldatabase"

&datafactorylinkedserviceazuresqldatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword {
	LinkedServiceName: *string,
	SecretName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#linked_service_name DataFactoryLinkedServiceAzureSqlDatabase#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword.property.secretName">SecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#secret_name DataFactoryLinkedServiceAzureSqlDatabase#secret_name}. |

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword.property.linkedServiceName"></a>

```go
LinkedServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#linked_service_name DataFactoryLinkedServiceAzureSqlDatabase#linked_service_name}.

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#secret_name DataFactoryLinkedServiceAzureSqlDatabase#secret_name}.

---

### DataFactoryLinkedServiceAzureSqlDatabaseTimeouts <a name="DataFactoryLinkedServiceAzureSqlDatabaseTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedserviceazuresqldatabase"

&datafactorylinkedserviceazuresqldatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#create DataFactoryLinkedServiceAzureSqlDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#delete DataFactoryLinkedServiceAzureSqlDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#read DataFactoryLinkedServiceAzureSqlDatabase#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#update DataFactoryLinkedServiceAzureSqlDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#create DataFactoryLinkedServiceAzureSqlDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#delete DataFactoryLinkedServiceAzureSqlDatabase#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#read DataFactoryLinkedServiceAzureSqlDatabase#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_azure_sql_database#update DataFactoryLinkedServiceAzureSqlDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference <a name="DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedserviceazuresqldatabase"

datafactorylinkedserviceazuresqldatabase.NewDataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.linkedServiceNameInput"></a>

```go
func LinkedServiceNameInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.linkedServiceName"></a>

```go
func LinkedServiceName() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString</a>

---


### DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference <a name="DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedserviceazuresqldatabase"

datafactorylinkedserviceazuresqldatabase.NewDataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.linkedServiceNameInput"></a>

```go
func LinkedServiceNameInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.linkedServiceName"></a>

```go
func LinkedServiceName() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword</a>

---


### DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference <a name="DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedserviceazuresqldatabase"

datafactorylinkedserviceazuresqldatabase.NewDataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



