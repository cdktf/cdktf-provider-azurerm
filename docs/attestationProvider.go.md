# `attestationProvider` Submodule <a name="`attestationProvider` Submodule" id="@cdktf/provider-azurerm.attestationProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AttestationProvider <a name="AttestationProvider" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider azurerm_attestation_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/attestationprovider"

attestationprovider.NewAttestationProvider(scope Construct, id *string, config AttestationProviderConfig) AttestationProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig">AttestationProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig">AttestationProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetOpenEnclavePolicyBase64">ResetOpenEnclavePolicyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetPolicySigningCertificateData">ResetPolicySigningCertificateData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetSevSnpPolicyBase64">ResetSevSnpPolicyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetSgxEnclavePolicyBase64">ResetSgxEnclavePolicyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetTpmPolicyBase64">ResetTpmPolicyBase64</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.putTimeouts"></a>

```go
func PutTimeouts(value AttestationProviderTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeouts">AttestationProviderTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetId"></a>

```go
func ResetId()
```

##### `ResetOpenEnclavePolicyBase64` <a name="ResetOpenEnclavePolicyBase64" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetOpenEnclavePolicyBase64"></a>

```go
func ResetOpenEnclavePolicyBase64()
```

##### `ResetPolicySigningCertificateData` <a name="ResetPolicySigningCertificateData" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetPolicySigningCertificateData"></a>

```go
func ResetPolicySigningCertificateData()
```

##### `ResetSevSnpPolicyBase64` <a name="ResetSevSnpPolicyBase64" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetSevSnpPolicyBase64"></a>

```go
func ResetSevSnpPolicyBase64()
```

##### `ResetSgxEnclavePolicyBase64` <a name="ResetSgxEnclavePolicyBase64" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetSgxEnclavePolicyBase64"></a>

```go
func ResetSgxEnclavePolicyBase64()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTpmPolicyBase64` <a name="ResetTpmPolicyBase64" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.resetTpmPolicyBase64"></a>

```go
func ResetTpmPolicyBase64()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AttestationProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/attestationprovider"

attestationprovider.AttestationProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/attestationprovider"

attestationprovider.AttestationProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/attestationprovider"

attestationprovider.AttestationProvider_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/attestationprovider"

attestationprovider.AttestationProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AttestationProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AttestationProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AttestationProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AttestationProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.attestationUri">AttestationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference">AttestationProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.trustModel">TrustModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.openEnclavePolicyBase64Input">OpenEnclavePolicyBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.policySigningCertificateDataInput">PolicySigningCertificateDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.sevSnpPolicyBase64Input">SevSnpPolicyBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.sgxEnclavePolicyBase64Input">SgxEnclavePolicyBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.tpmPolicyBase64Input">TpmPolicyBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.openEnclavePolicyBase64">OpenEnclavePolicyBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.policySigningCertificateData">PolicySigningCertificateData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.sevSnpPolicyBase64">SevSnpPolicyBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.sgxEnclavePolicyBase64">SgxEnclavePolicyBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.tpmPolicyBase64">TpmPolicyBase64</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttestationUri`<sup>Required</sup> <a name="AttestationUri" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.attestationUri"></a>

```go
func AttestationUri() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.timeouts"></a>

```go
func Timeouts() AttestationProviderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference">AttestationProviderTimeoutsOutputReference</a>

---

##### `TrustModel`<sup>Required</sup> <a name="TrustModel" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.trustModel"></a>

```go
func TrustModel() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OpenEnclavePolicyBase64Input`<sup>Optional</sup> <a name="OpenEnclavePolicyBase64Input" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.openEnclavePolicyBase64Input"></a>

```go
func OpenEnclavePolicyBase64Input() *string
```

- *Type:* *string

---

##### `PolicySigningCertificateDataInput`<sup>Optional</sup> <a name="PolicySigningCertificateDataInput" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.policySigningCertificateDataInput"></a>

```go
func PolicySigningCertificateDataInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SevSnpPolicyBase64Input`<sup>Optional</sup> <a name="SevSnpPolicyBase64Input" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.sevSnpPolicyBase64Input"></a>

```go
func SevSnpPolicyBase64Input() *string
```

- *Type:* *string

---

##### `SgxEnclavePolicyBase64Input`<sup>Optional</sup> <a name="SgxEnclavePolicyBase64Input" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.sgxEnclavePolicyBase64Input"></a>

```go
func SgxEnclavePolicyBase64Input() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TpmPolicyBase64Input`<sup>Optional</sup> <a name="TpmPolicyBase64Input" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.tpmPolicyBase64Input"></a>

```go
func TpmPolicyBase64Input() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpenEnclavePolicyBase64`<sup>Required</sup> <a name="OpenEnclavePolicyBase64" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.openEnclavePolicyBase64"></a>

```go
func OpenEnclavePolicyBase64() *string
```

- *Type:* *string

---

##### `PolicySigningCertificateData`<sup>Required</sup> <a name="PolicySigningCertificateData" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.policySigningCertificateData"></a>

```go
func PolicySigningCertificateData() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SevSnpPolicyBase64`<sup>Required</sup> <a name="SevSnpPolicyBase64" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.sevSnpPolicyBase64"></a>

```go
func SevSnpPolicyBase64() *string
```

- *Type:* *string

---

##### `SgxEnclavePolicyBase64`<sup>Required</sup> <a name="SgxEnclavePolicyBase64" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.sgxEnclavePolicyBase64"></a>

```go
func SgxEnclavePolicyBase64() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TpmPolicyBase64`<sup>Required</sup> <a name="TpmPolicyBase64" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.tpmPolicyBase64"></a>

```go
func TpmPolicyBase64() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.attestationProvider.AttestationProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AttestationProviderConfig <a name="AttestationProviderConfig" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/attestationprovider"

&attestationprovider.AttestationProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	OpenEnclavePolicyBase64: *string,
	PolicySigningCertificateData: *string,
	SevSnpPolicyBase64: *string,
	SgxEnclavePolicyBase64: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.attestationProvider.AttestationProviderTimeouts,
	TpmPolicyBase64: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#location AttestationProvider#location}. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#name AttestationProvider#name}. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#resource_group_name AttestationProvider#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#id AttestationProvider#id}. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.openEnclavePolicyBase64">OpenEnclavePolicyBase64</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#open_enclave_policy_base64 AttestationProvider#open_enclave_policy_base64}. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.policySigningCertificateData">PolicySigningCertificateData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#policy_signing_certificate_data AttestationProvider#policy_signing_certificate_data}. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.sevSnpPolicyBase64">SevSnpPolicyBase64</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#sev_snp_policy_base64 AttestationProvider#sev_snp_policy_base64}. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.sgxEnclavePolicyBase64">SgxEnclavePolicyBase64</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#sgx_enclave_policy_base64 AttestationProvider#sgx_enclave_policy_base64}. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#tags AttestationProvider#tags}. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeouts">AttestationProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.tpmPolicyBase64">TpmPolicyBase64</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#tpm_policy_base64 AttestationProvider#tpm_policy_base64}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#location AttestationProvider#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#name AttestationProvider#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#resource_group_name AttestationProvider#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#id AttestationProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OpenEnclavePolicyBase64`<sup>Optional</sup> <a name="OpenEnclavePolicyBase64" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.openEnclavePolicyBase64"></a>

```go
OpenEnclavePolicyBase64 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#open_enclave_policy_base64 AttestationProvider#open_enclave_policy_base64}.

---

##### `PolicySigningCertificateData`<sup>Optional</sup> <a name="PolicySigningCertificateData" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.policySigningCertificateData"></a>

```go
PolicySigningCertificateData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#policy_signing_certificate_data AttestationProvider#policy_signing_certificate_data}.

---

##### `SevSnpPolicyBase64`<sup>Optional</sup> <a name="SevSnpPolicyBase64" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.sevSnpPolicyBase64"></a>

```go
SevSnpPolicyBase64 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#sev_snp_policy_base64 AttestationProvider#sev_snp_policy_base64}.

---

##### `SgxEnclavePolicyBase64`<sup>Optional</sup> <a name="SgxEnclavePolicyBase64" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.sgxEnclavePolicyBase64"></a>

```go
SgxEnclavePolicyBase64 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#sgx_enclave_policy_base64 AttestationProvider#sgx_enclave_policy_base64}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#tags AttestationProvider#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.timeouts"></a>

```go
Timeouts AttestationProviderTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeouts">AttestationProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#timeouts AttestationProvider#timeouts}

---

##### `TpmPolicyBase64`<sup>Optional</sup> <a name="TpmPolicyBase64" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderConfig.property.tpmPolicyBase64"></a>

```go
TpmPolicyBase64 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#tpm_policy_base64 AttestationProvider#tpm_policy_base64}.

---

### AttestationProviderTimeouts <a name="AttestationProviderTimeouts" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/attestationprovider"

&attestationprovider.AttestationProviderTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#create AttestationProvider#create}. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#delete AttestationProvider#delete}. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#read AttestationProvider#read}. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#update AttestationProvider#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#create AttestationProvider#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#delete AttestationProvider#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#read AttestationProvider#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/attestation_provider#update AttestationProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AttestationProviderTimeoutsOutputReference <a name="AttestationProviderTimeoutsOutputReference" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/attestationprovider"

attestationprovider.NewAttestationProviderTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AttestationProviderTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.attestationProvider.AttestationProviderTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



