# `keyVaultManagedStorageAccountSasTokenDefinition` Submodule <a name="`keyVaultManagedStorageAccountSasTokenDefinition` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedStorageAccountSasTokenDefinition <a name="KeyVaultManagedStorageAccountSasTokenDefinition" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition azurerm_key_vault_managed_storage_account_sas_token_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultmanagedstorageaccountsastokendefinition"

keyvaultmanagedstorageaccountsastokendefinition.NewKeyVaultManagedStorageAccountSasTokenDefinition(scope Construct, id *string, config KeyVaultManagedStorageAccountSasTokenDefinitionConfig) KeyVaultManagedStorageAccountSasTokenDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig">KeyVaultManagedStorageAccountSasTokenDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig">KeyVaultManagedStorageAccountSasTokenDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.putTimeouts"></a>

```go
func PutTimeouts(value KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultManagedStorageAccountSasTokenDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultmanagedstorageaccountsastokendefinition"

keyvaultmanagedstorageaccountsastokendefinition.KeyVaultManagedStorageAccountSasTokenDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultmanagedstorageaccountsastokendefinition"

keyvaultmanagedstorageaccountsastokendefinition.KeyVaultManagedStorageAccountSasTokenDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultmanagedstorageaccountsastokendefinition"

keyvaultmanagedstorageaccountsastokendefinition.KeyVaultManagedStorageAccountSasTokenDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultmanagedstorageaccountsastokendefinition"

keyvaultmanagedstorageaccountsastokendefinition.KeyVaultManagedStorageAccountSasTokenDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KeyVaultManagedStorageAccountSasTokenDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KeyVaultManagedStorageAccountSasTokenDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KeyVaultManagedStorageAccountSasTokenDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedStorageAccountSasTokenDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference">KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.managedStorageAccountIdInput">ManagedStorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTemplateUriInput">SasTemplateUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTypeInput">SasTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.validityPeriodInput">ValidityPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.managedStorageAccountId">ManagedStorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTemplateUri">SasTemplateUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasType">SasType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.validityPeriod">ValidityPeriod</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.timeouts"></a>

```go
func Timeouts() KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference">KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedStorageAccountIdInput`<sup>Optional</sup> <a name="ManagedStorageAccountIdInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.managedStorageAccountIdInput"></a>

```go
func ManagedStorageAccountIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SasTemplateUriInput`<sup>Optional</sup> <a name="SasTemplateUriInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTemplateUriInput"></a>

```go
func SasTemplateUriInput() *string
```

- *Type:* *string

---

##### `SasTypeInput`<sup>Optional</sup> <a name="SasTypeInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTypeInput"></a>

```go
func SasTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ValidityPeriodInput`<sup>Optional</sup> <a name="ValidityPeriodInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.validityPeriodInput"></a>

```go
func ValidityPeriodInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedStorageAccountId`<sup>Required</sup> <a name="ManagedStorageAccountId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.managedStorageAccountId"></a>

```go
func ManagedStorageAccountId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SasTemplateUri`<sup>Required</sup> <a name="SasTemplateUri" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTemplateUri"></a>

```go
func SasTemplateUri() *string
```

- *Type:* *string

---

##### `SasType`<sup>Required</sup> <a name="SasType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasType"></a>

```go
func SasType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ValidityPeriod`<sup>Required</sup> <a name="ValidityPeriod" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.validityPeriod"></a>

```go
func ValidityPeriod() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedStorageAccountSasTokenDefinitionConfig <a name="KeyVaultManagedStorageAccountSasTokenDefinitionConfig" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultmanagedstorageaccountsastokendefinition"

&keyvaultmanagedstorageaccountsastokendefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedStorageAccountId: *string,
	Name: *string,
	SasTemplateUri: *string,
	SasType: *string,
	ValidityPeriod: *string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.managedStorageAccountId">ManagedStorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#managed_storage_account_id KeyVaultManagedStorageAccountSasTokenDefinition#managed_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#name KeyVaultManagedStorageAccountSasTokenDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.sasTemplateUri">SasTemplateUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_template_uri KeyVaultManagedStorageAccountSasTokenDefinition#sas_template_uri}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.sasType">SasType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_type KeyVaultManagedStorageAccountSasTokenDefinition#sas_type}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.validityPeriod">ValidityPeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#validity_period KeyVaultManagedStorageAccountSasTokenDefinition#validity_period}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#id KeyVaultManagedStorageAccountSasTokenDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#tags KeyVaultManagedStorageAccountSasTokenDefinition#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedStorageAccountId`<sup>Required</sup> <a name="ManagedStorageAccountId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.managedStorageAccountId"></a>

```go
ManagedStorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#managed_storage_account_id KeyVaultManagedStorageAccountSasTokenDefinition#managed_storage_account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#name KeyVaultManagedStorageAccountSasTokenDefinition#name}.

---

##### `SasTemplateUri`<sup>Required</sup> <a name="SasTemplateUri" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.sasTemplateUri"></a>

```go
SasTemplateUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_template_uri KeyVaultManagedStorageAccountSasTokenDefinition#sas_template_uri}.

---

##### `SasType`<sup>Required</sup> <a name="SasType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.sasType"></a>

```go
SasType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_type KeyVaultManagedStorageAccountSasTokenDefinition#sas_type}.

---

##### `ValidityPeriod`<sup>Required</sup> <a name="ValidityPeriod" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.validityPeriod"></a>

```go
ValidityPeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#validity_period KeyVaultManagedStorageAccountSasTokenDefinition#validity_period}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#id KeyVaultManagedStorageAccountSasTokenDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#tags KeyVaultManagedStorageAccountSasTokenDefinition#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.timeouts"></a>

```go
Timeouts KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#timeouts KeyVaultManagedStorageAccountSasTokenDefinition#timeouts}

---

### KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts <a name="KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultmanagedstorageaccountsastokendefinition"

&keyvaultmanagedstorageaccountsastokendefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#create KeyVaultManagedStorageAccountSasTokenDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#delete KeyVaultManagedStorageAccountSasTokenDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#read KeyVaultManagedStorageAccountSasTokenDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#update KeyVaultManagedStorageAccountSasTokenDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#create KeyVaultManagedStorageAccountSasTokenDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#delete KeyVaultManagedStorageAccountSasTokenDefinition#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#read KeyVaultManagedStorageAccountSasTokenDefinition#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#update KeyVaultManagedStorageAccountSasTokenDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference <a name="KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultmanagedstorageaccountsastokendefinition"

keyvaultmanagedstorageaccountsastokendefinition.NewKeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



