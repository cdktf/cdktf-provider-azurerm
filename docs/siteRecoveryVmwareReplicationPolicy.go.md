# `azurerm_site_recovery_vmware_replication_policy`

Refer to the Terraform Registory for docs: [`azurerm_site_recovery_vmware_replication_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy).

# `siteRecoveryVmwareReplicationPolicy` Submodule <a name="`siteRecoveryVmwareReplicationPolicy` Submodule" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryVmwareReplicationPolicy <a name="SiteRecoveryVmwareReplicationPolicy" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy azurerm_site_recovery_vmware_replication_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/siterecoveryvmwarereplicationpolicy"

siterecoveryvmwarereplicationpolicy.NewSiteRecoveryVmwareReplicationPolicy(scope Construct, id *string, config SiteRecoveryVmwareReplicationPolicyConfig) SiteRecoveryVmwareReplicationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig">SiteRecoveryVmwareReplicationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig">SiteRecoveryVmwareReplicationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.putTimeouts"></a>

```go
func PutTimeouts(value SiteRecoveryVmwareReplicationPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeouts">SiteRecoveryVmwareReplicationPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SiteRecoveryVmwareReplicationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/siterecoveryvmwarereplicationpolicy"

siterecoveryvmwarereplicationpolicy.SiteRecoveryVmwareReplicationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/siterecoveryvmwarereplicationpolicy"

siterecoveryvmwarereplicationpolicy.SiteRecoveryVmwareReplicationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/siterecoveryvmwarereplicationpolicy"

siterecoveryvmwarereplicationpolicy.SiteRecoveryVmwareReplicationPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/siterecoveryvmwarereplicationpolicy"

siterecoveryvmwarereplicationpolicy.SiteRecoveryVmwareReplicationPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SiteRecoveryVmwareReplicationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SiteRecoveryVmwareReplicationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SiteRecoveryVmwareReplicationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SiteRecoveryVmwareReplicationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference">SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.applicationConsistentSnapshotFrequencyInMinutesInput">ApplicationConsistentSnapshotFrequencyInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.recoveryPointRetentionInMinutesInput">RecoveryPointRetentionInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.recoveryVaultIdInput">RecoveryVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.applicationConsistentSnapshotFrequencyInMinutes">ApplicationConsistentSnapshotFrequencyInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.recoveryPointRetentionInMinutes">RecoveryPointRetentionInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.recoveryVaultId">RecoveryVaultId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.timeouts"></a>

```go
func Timeouts() SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference">SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference</a>

---

##### `ApplicationConsistentSnapshotFrequencyInMinutesInput`<sup>Optional</sup> <a name="ApplicationConsistentSnapshotFrequencyInMinutesInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.applicationConsistentSnapshotFrequencyInMinutesInput"></a>

```go
func ApplicationConsistentSnapshotFrequencyInMinutesInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecoveryPointRetentionInMinutesInput`<sup>Optional</sup> <a name="RecoveryPointRetentionInMinutesInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.recoveryPointRetentionInMinutesInput"></a>

```go
func RecoveryPointRetentionInMinutesInput() *f64
```

- *Type:* *f64

---

##### `RecoveryVaultIdInput`<sup>Optional</sup> <a name="RecoveryVaultIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.recoveryVaultIdInput"></a>

```go
func RecoveryVaultIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationConsistentSnapshotFrequencyInMinutes`<sup>Required</sup> <a name="ApplicationConsistentSnapshotFrequencyInMinutes" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.applicationConsistentSnapshotFrequencyInMinutes"></a>

```go
func ApplicationConsistentSnapshotFrequencyInMinutes() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RecoveryPointRetentionInMinutes`<sup>Required</sup> <a name="RecoveryPointRetentionInMinutes" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.recoveryPointRetentionInMinutes"></a>

```go
func RecoveryPointRetentionInMinutes() *f64
```

- *Type:* *f64

---

##### `RecoveryVaultId`<sup>Required</sup> <a name="RecoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.recoveryVaultId"></a>

```go
func RecoveryVaultId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryVmwareReplicationPolicyConfig <a name="SiteRecoveryVmwareReplicationPolicyConfig" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/siterecoveryvmwarereplicationpolicy"

&siterecoveryvmwarereplicationpolicy.SiteRecoveryVmwareReplicationPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationConsistentSnapshotFrequencyInMinutes: *f64,
	Name: *string,
	RecoveryPointRetentionInMinutes: *f64,
	RecoveryVaultId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.applicationConsistentSnapshotFrequencyInMinutes">ApplicationConsistentSnapshotFrequencyInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#application_consistent_snapshot_frequency_in_minutes SiteRecoveryVmwareReplicationPolicy#application_consistent_snapshot_frequency_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#name SiteRecoveryVmwareReplicationPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.recoveryPointRetentionInMinutes">RecoveryPointRetentionInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#recovery_point_retention_in_minutes SiteRecoveryVmwareReplicationPolicy#recovery_point_retention_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.recoveryVaultId">RecoveryVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#recovery_vault_id SiteRecoveryVmwareReplicationPolicy#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#id SiteRecoveryVmwareReplicationPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeouts">SiteRecoveryVmwareReplicationPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationConsistentSnapshotFrequencyInMinutes`<sup>Required</sup> <a name="ApplicationConsistentSnapshotFrequencyInMinutes" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.applicationConsistentSnapshotFrequencyInMinutes"></a>

```go
ApplicationConsistentSnapshotFrequencyInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#application_consistent_snapshot_frequency_in_minutes SiteRecoveryVmwareReplicationPolicy#application_consistent_snapshot_frequency_in_minutes}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#name SiteRecoveryVmwareReplicationPolicy#name}.

---

##### `RecoveryPointRetentionInMinutes`<sup>Required</sup> <a name="RecoveryPointRetentionInMinutes" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.recoveryPointRetentionInMinutes"></a>

```go
RecoveryPointRetentionInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#recovery_point_retention_in_minutes SiteRecoveryVmwareReplicationPolicy#recovery_point_retention_in_minutes}.

---

##### `RecoveryVaultId`<sup>Required</sup> <a name="RecoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.recoveryVaultId"></a>

```go
RecoveryVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#recovery_vault_id SiteRecoveryVmwareReplicationPolicy#recovery_vault_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#id SiteRecoveryVmwareReplicationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyConfig.property.timeouts"></a>

```go
Timeouts SiteRecoveryVmwareReplicationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeouts">SiteRecoveryVmwareReplicationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#timeouts SiteRecoveryVmwareReplicationPolicy#timeouts}

---

### SiteRecoveryVmwareReplicationPolicyTimeouts <a name="SiteRecoveryVmwareReplicationPolicyTimeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/siterecoveryvmwarereplicationpolicy"

&siterecoveryvmwarereplicationpolicy.SiteRecoveryVmwareReplicationPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#create SiteRecoveryVmwareReplicationPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#delete SiteRecoveryVmwareReplicationPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#read SiteRecoveryVmwareReplicationPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#update SiteRecoveryVmwareReplicationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#create SiteRecoveryVmwareReplicationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#delete SiteRecoveryVmwareReplicationPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#read SiteRecoveryVmwareReplicationPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/site_recovery_vmware_replication_policy#update SiteRecoveryVmwareReplicationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference <a name="SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/siterecoveryvmwarereplicationpolicy"

siterecoveryvmwarereplicationpolicy.NewSiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicy.SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



