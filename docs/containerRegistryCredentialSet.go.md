# `containerRegistryCredentialSet` Submodule <a name="`containerRegistryCredentialSet` Submodule" id="@cdktf/provider-azurerm.containerRegistryCredentialSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryCredentialSet <a name="ContainerRegistryCredentialSet" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set azurerm_container_registry_credential_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerregistrycredentialset"

containerregistrycredentialset.NewContainerRegistryCredentialSet(scope Construct, id *string, config ContainerRegistryCredentialSetConfig) ContainerRegistryCredentialSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig">ContainerRegistryCredentialSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig">ContainerRegistryCredentialSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putAuthenticationCredentials">PutAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthenticationCredentials` <a name="PutAuthenticationCredentials" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putAuthenticationCredentials"></a>

```go
func PutAuthenticationCredentials(value ContainerRegistryCredentialSetAuthenticationCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putAuthenticationCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putIdentity"></a>

```go
func PutIdentity(value ContainerRegistryCredentialSetIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putTimeouts"></a>

```go
func PutTimeouts(value ContainerRegistryCredentialSetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerRegistryCredentialSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerregistrycredentialset"

containerregistrycredentialset.ContainerRegistryCredentialSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerregistrycredentialset"

containerregistrycredentialset.ContainerRegistryCredentialSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerregistrycredentialset"

containerregistrycredentialset.ContainerRegistryCredentialSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerregistrycredentialset"

containerregistrycredentialset.ContainerRegistryCredentialSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ContainerRegistryCredentialSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContainerRegistryCredentialSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContainerRegistryCredentialSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistryCredentialSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.authenticationCredentials">AuthenticationCredentials</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference">ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference">ContainerRegistryCredentialSetIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference">ContainerRegistryCredentialSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.authenticationCredentialsInput">AuthenticationCredentialsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.containerRegistryIdInput">ContainerRegistryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.loginServerInput">LoginServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.containerRegistryId">ContainerRegistryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.loginServer">LoginServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthenticationCredentials`<sup>Required</sup> <a name="AuthenticationCredentials" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.authenticationCredentials"></a>

```go
func AuthenticationCredentials() ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference">ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.identity"></a>

```go
func Identity() ContainerRegistryCredentialSetIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference">ContainerRegistryCredentialSetIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.timeouts"></a>

```go
func Timeouts() ContainerRegistryCredentialSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference">ContainerRegistryCredentialSetTimeoutsOutputReference</a>

---

##### `AuthenticationCredentialsInput`<sup>Optional</sup> <a name="AuthenticationCredentialsInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.authenticationCredentialsInput"></a>

```go
func AuthenticationCredentialsInput() ContainerRegistryCredentialSetAuthenticationCredentials
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a>

---

##### `ContainerRegistryIdInput`<sup>Optional</sup> <a name="ContainerRegistryIdInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.containerRegistryIdInput"></a>

```go
func ContainerRegistryIdInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.identityInput"></a>

```go
func IdentityInput() ContainerRegistryCredentialSetIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoginServerInput`<sup>Optional</sup> <a name="LoginServerInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.loginServerInput"></a>

```go
func LoginServerInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerRegistryId`<sup>Required</sup> <a name="ContainerRegistryId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.containerRegistryId"></a>

```go
func ContainerRegistryId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoginServer`<sup>Required</sup> <a name="LoginServer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.loginServer"></a>

```go
func LoginServer() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryCredentialSetAuthenticationCredentials <a name="ContainerRegistryCredentialSetAuthenticationCredentials" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerregistrycredentialset"

&containerregistrycredentialset.ContainerRegistryCredentialSetAuthenticationCredentials {
	PasswordSecretId: *string,
	UsernameSecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#password_secret_id ContainerRegistryCredentialSet#password_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials.property.usernameSecretId">UsernameSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#username_secret_id ContainerRegistryCredentialSet#username_secret_id}. |

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials.property.passwordSecretId"></a>

```go
PasswordSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#password_secret_id ContainerRegistryCredentialSet#password_secret_id}.

---

##### `UsernameSecretId`<sup>Required</sup> <a name="UsernameSecretId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials.property.usernameSecretId"></a>

```go
UsernameSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#username_secret_id ContainerRegistryCredentialSet#username_secret_id}.

---

### ContainerRegistryCredentialSetConfig <a name="ContainerRegistryCredentialSetConfig" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerregistrycredentialset"

&containerregistrycredentialset.ContainerRegistryCredentialSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthenticationCredentials: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials,
	ContainerRegistryId: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity,
	LoginServer: *string,
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.authenticationCredentials">AuthenticationCredentials</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a></code> | authentication_credentials block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.containerRegistryId">ContainerRegistryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#container_registry_id ContainerRegistryCredentialSet#container_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.loginServer">LoginServer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#login_server ContainerRegistryCredentialSet#login_server}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.name">Name</a></code> | <code>*string</code> | The name of the credential set. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#id ContainerRegistryCredentialSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthenticationCredentials`<sup>Required</sup> <a name="AuthenticationCredentials" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.authenticationCredentials"></a>

```go
AuthenticationCredentials ContainerRegistryCredentialSetAuthenticationCredentials
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a>

authentication_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#authentication_credentials ContainerRegistryCredentialSet#authentication_credentials}

---

##### `ContainerRegistryId`<sup>Required</sup> <a name="ContainerRegistryId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.containerRegistryId"></a>

```go
ContainerRegistryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#container_registry_id ContainerRegistryCredentialSet#container_registry_id}.

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.identity"></a>

```go
Identity ContainerRegistryCredentialSetIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#identity ContainerRegistryCredentialSet#identity}

---

##### `LoginServer`<sup>Required</sup> <a name="LoginServer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.loginServer"></a>

```go
LoginServer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#login_server ContainerRegistryCredentialSet#login_server}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the credential set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#name ContainerRegistryCredentialSet#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#id ContainerRegistryCredentialSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.timeouts"></a>

```go
Timeouts ContainerRegistryCredentialSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#timeouts ContainerRegistryCredentialSet#timeouts}

---

### ContainerRegistryCredentialSetIdentity <a name="ContainerRegistryCredentialSetIdentity" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerregistrycredentialset"

&containerregistrycredentialset.ContainerRegistryCredentialSetIdentity {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#type ContainerRegistryCredentialSet#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#type ContainerRegistryCredentialSet#type}.

---

### ContainerRegistryCredentialSetTimeouts <a name="ContainerRegistryCredentialSetTimeouts" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerregistrycredentialset"

&containerregistrycredentialset.ContainerRegistryCredentialSetTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#create ContainerRegistryCredentialSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#delete ContainerRegistryCredentialSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#read ContainerRegistryCredentialSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#update ContainerRegistryCredentialSet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#create ContainerRegistryCredentialSet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#delete ContainerRegistryCredentialSet#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#read ContainerRegistryCredentialSet#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/container_registry_credential_set#update ContainerRegistryCredentialSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference <a name="ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerregistrycredentialset"

containerregistrycredentialset.NewContainerRegistryCredentialSetAuthenticationCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.passwordSecretIdInput">PasswordSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.usernameSecretIdInput">UsernameSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.usernameSecretId">UsernameSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordSecretIdInput`<sup>Optional</sup> <a name="PasswordSecretIdInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.passwordSecretIdInput"></a>

```go
func PasswordSecretIdInput() *string
```

- *Type:* *string

---

##### `UsernameSecretIdInput`<sup>Optional</sup> <a name="UsernameSecretIdInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.usernameSecretIdInput"></a>

```go
func UsernameSecretIdInput() *string
```

- *Type:* *string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.passwordSecretId"></a>

```go
func PasswordSecretId() *string
```

- *Type:* *string

---

##### `UsernameSecretId`<sup>Required</sup> <a name="UsernameSecretId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.usernameSecretId"></a>

```go
func UsernameSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerRegistryCredentialSetAuthenticationCredentials
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a>

---


### ContainerRegistryCredentialSetIdentityOutputReference <a name="ContainerRegistryCredentialSetIdentityOutputReference" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerregistrycredentialset"

containerregistrycredentialset.NewContainerRegistryCredentialSetIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerRegistryCredentialSetIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerRegistryCredentialSetIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a>

---


### ContainerRegistryCredentialSetTimeoutsOutputReference <a name="ContainerRegistryCredentialSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/containerregistrycredentialset"

containerregistrycredentialset.NewContainerRegistryCredentialSetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerRegistryCredentialSetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



