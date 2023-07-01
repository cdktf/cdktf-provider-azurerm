# `azurerm_app_service_source_control`

Refer to the Terraform Registory for docs: [`azurerm_app_service_source_control`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control).

# `appServiceSourceControl` Submodule <a name="`appServiceSourceControl` Submodule" id="@cdktf/provider-azurerm.appServiceSourceControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceSourceControlA <a name="AppServiceSourceControlA" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control azurerm_app_service_source_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/appservicesourcecontrol"

appservicesourcecontrol.NewAppServiceSourceControlA(scope Construct, id *string, config AppServiceSourceControlAConfig) AppServiceSourceControlA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig">AppServiceSourceControlAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig">AppServiceSourceControlAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putGithubActionConfiguration">PutGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetGithubActionConfiguration">ResetGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetRepoUrl">ResetRepoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetRollbackEnabled">ResetRollbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseLocalGit">ResetUseLocalGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseManualIntegration">ResetUseManualIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseMercurial">ResetUseMercurial</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGithubActionConfiguration` <a name="PutGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putGithubActionConfiguration"></a>

```go
func PutGithubActionConfiguration(value AppServiceSourceControlGithubActionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putGithubActionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putTimeouts"></a>

```go
func PutTimeouts(value AppServiceSourceControlTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a>

---

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetGithubActionConfiguration` <a name="ResetGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetGithubActionConfiguration"></a>

```go
func ResetGithubActionConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetId"></a>

```go
func ResetId()
```

##### `ResetRepoUrl` <a name="ResetRepoUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetRepoUrl"></a>

```go
func ResetRepoUrl()
```

##### `ResetRollbackEnabled` <a name="ResetRollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetRollbackEnabled"></a>

```go
func ResetRollbackEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUseLocalGit` <a name="ResetUseLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseLocalGit"></a>

```go
func ResetUseLocalGit()
```

##### `ResetUseManualIntegration` <a name="ResetUseManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseManualIntegration"></a>

```go
func ResetUseManualIntegration()
```

##### `ResetUseMercurial` <a name="ResetUseMercurial" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseMercurial"></a>

```go
func ResetUseMercurial()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/appservicesourcecontrol"

appservicesourcecontrol.AppServiceSourceControlA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/appservicesourcecontrol"

appservicesourcecontrol.AppServiceSourceControlA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/appservicesourcecontrol"

appservicesourcecontrol.AppServiceSourceControlA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.githubActionConfiguration">GithubActionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.scmType">ScmType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference">AppServiceSourceControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.usesGithubAction">UsesGithubAction</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.githubActionConfigurationInput">GithubActionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.repoUrlInput">RepoUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.rollbackEnabledInput">RollbackEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useLocalGitInput">UseLocalGitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useManualIntegrationInput">UseManualIntegrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useMercurialInput">UseMercurialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.repoUrl">RepoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.rollbackEnabled">RollbackEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useLocalGit">UseLocalGit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useManualIntegration">UseManualIntegration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useMercurial">UseMercurial</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GithubActionConfiguration`<sup>Required</sup> <a name="GithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.githubActionConfiguration"></a>

```go
func GithubActionConfiguration() AppServiceSourceControlGithubActionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationOutputReference</a>

---

##### `ScmType`<sup>Required</sup> <a name="ScmType" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.scmType"></a>

```go
func ScmType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.timeouts"></a>

```go
func Timeouts() AppServiceSourceControlTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference">AppServiceSourceControlTimeoutsOutputReference</a>

---

##### `UsesGithubAction`<sup>Required</sup> <a name="UsesGithubAction" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.usesGithubAction"></a>

```go
func UsesGithubAction() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `GithubActionConfigurationInput`<sup>Optional</sup> <a name="GithubActionConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.githubActionConfigurationInput"></a>

```go
func GithubActionConfigurationInput() AppServiceSourceControlGithubActionConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepoUrlInput`<sup>Optional</sup> <a name="RepoUrlInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.repoUrlInput"></a>

```go
func RepoUrlInput() *string
```

- *Type:* *string

---

##### `RollbackEnabledInput`<sup>Optional</sup> <a name="RollbackEnabledInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.rollbackEnabledInput"></a>

```go
func RollbackEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UseLocalGitInput`<sup>Optional</sup> <a name="UseLocalGitInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useLocalGitInput"></a>

```go
func UseLocalGitInput() interface{}
```

- *Type:* interface{}

---

##### `UseManualIntegrationInput`<sup>Optional</sup> <a name="UseManualIntegrationInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useManualIntegrationInput"></a>

```go
func UseManualIntegrationInput() interface{}
```

- *Type:* interface{}

---

##### `UseMercurialInput`<sup>Optional</sup> <a name="UseMercurialInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useMercurialInput"></a>

```go
func UseMercurialInput() interface{}
```

- *Type:* interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RepoUrl`<sup>Required</sup> <a name="RepoUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.repoUrl"></a>

```go
func RepoUrl() *string
```

- *Type:* *string

---

##### `RollbackEnabled`<sup>Required</sup> <a name="RollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.rollbackEnabled"></a>

```go
func RollbackEnabled() interface{}
```

- *Type:* interface{}

---

##### `UseLocalGit`<sup>Required</sup> <a name="UseLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useLocalGit"></a>

```go
func UseLocalGit() interface{}
```

- *Type:* interface{}

---

##### `UseManualIntegration`<sup>Required</sup> <a name="UseManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useManualIntegration"></a>

```go
func UseManualIntegration() interface{}
```

- *Type:* interface{}

---

##### `UseMercurial`<sup>Required</sup> <a name="UseMercurial" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useMercurial"></a>

```go
func UseMercurial() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceSourceControlAConfig <a name="AppServiceSourceControlAConfig" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/appservicesourcecontrol"

&appservicesourcecontrol.AppServiceSourceControlAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	Branch: *string,
	GithubActionConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration,
	Id: *string,
	RepoUrl: *string,
	RollbackEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.appServiceSourceControl.AppServiceSourceControlTimeouts,
	UseLocalGit: interface{},
	UseManualIntegration: interface{},
	UseMercurial: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.appId">AppId</a></code> | <code>*string</code> | The ID of the Windows or Linux Web App. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.branch">Branch</a></code> | <code>*string</code> | The branch name to use for deployments. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.githubActionConfiguration">GithubActionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | github_action_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#id AppServiceSourceControlA#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.repoUrl">RepoUrl</a></code> | <code>*string</code> | The URL for the repository. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.rollbackEnabled">RollbackEnabled</a></code> | <code>interface{}</code> | Should the Deployment Rollback be enabled? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useLocalGit">UseLocalGit</a></code> | <code>interface{}</code> | Should the App use local Git configuration. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useManualIntegration">UseManualIntegration</a></code> | <code>interface{}</code> | Should code be deployed manually. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useMercurial">UseMercurial</a></code> | <code>interface{}</code> | The repository specified is Mercurial. Defaults to `false`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

The ID of the Windows or Linux Web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#app_id AppServiceSourceControlA#app_id}

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

The branch name to use for deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#branch AppServiceSourceControlA#branch}

---

##### `GithubActionConfiguration`<sup>Optional</sup> <a name="GithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.githubActionConfiguration"></a>

```go
GithubActionConfiguration AppServiceSourceControlGithubActionConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

github_action_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#github_action_configuration AppServiceSourceControlA#github_action_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#id AppServiceSourceControlA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RepoUrl`<sup>Optional</sup> <a name="RepoUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.repoUrl"></a>

```go
RepoUrl *string
```

- *Type:* *string

The URL for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#repo_url AppServiceSourceControlA#repo_url}

---

##### `RollbackEnabled`<sup>Optional</sup> <a name="RollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.rollbackEnabled"></a>

```go
RollbackEnabled interface{}
```

- *Type:* interface{}

Should the Deployment Rollback be enabled? Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#rollback_enabled AppServiceSourceControlA#rollback_enabled}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.timeouts"></a>

```go
Timeouts AppServiceSourceControlTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#timeouts AppServiceSourceControlA#timeouts}

---

##### `UseLocalGit`<sup>Optional</sup> <a name="UseLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useLocalGit"></a>

```go
UseLocalGit interface{}
```

- *Type:* interface{}

Should the App use local Git configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#use_local_git AppServiceSourceControlA#use_local_git}

---

##### `UseManualIntegration`<sup>Optional</sup> <a name="UseManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useManualIntegration"></a>

```go
UseManualIntegration interface{}
```

- *Type:* interface{}

Should code be deployed manually.

Set to `false` to enable continuous integration, such as webhooks into online repos such as GitHub. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#use_manual_integration AppServiceSourceControlA#use_manual_integration}

---

##### `UseMercurial`<sup>Optional</sup> <a name="UseMercurial" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useMercurial"></a>

```go
UseMercurial interface{}
```

- *Type:* interface{}

The repository specified is Mercurial. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#use_mercurial AppServiceSourceControlA#use_mercurial}

---

### AppServiceSourceControlGithubActionConfiguration <a name="AppServiceSourceControlGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/appservicesourcecontrol"

&appservicesourcecontrol.AppServiceSourceControlGithubActionConfiguration {
	CodeConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration,
	ContainerConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration,
	GenerateWorkflowFile: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.codeConfiguration">CodeConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a></code> | code_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.containerConfiguration">ContainerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a></code> | container_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.generateWorkflowFile">GenerateWorkflowFile</a></code> | <code>interface{}</code> | Should the service generate the GitHub Action Workflow file. Defaults to `true`. |

---

##### `CodeConfiguration`<sup>Optional</sup> <a name="CodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.codeConfiguration"></a>

```go
CodeConfiguration AppServiceSourceControlGithubActionConfigurationCodeConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

code_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#code_configuration AppServiceSourceControlA#code_configuration}

---

##### `ContainerConfiguration`<sup>Optional</sup> <a name="ContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.containerConfiguration"></a>

```go
ContainerConfiguration AppServiceSourceControlGithubActionConfigurationContainerConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

container_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#container_configuration AppServiceSourceControlA#container_configuration}

---

##### `GenerateWorkflowFile`<sup>Optional</sup> <a name="GenerateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.generateWorkflowFile"></a>

```go
GenerateWorkflowFile interface{}
```

- *Type:* interface{}

Should the service generate the GitHub Action Workflow file. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#generate_workflow_file AppServiceSourceControlA#generate_workflow_file}

---

### AppServiceSourceControlGithubActionConfigurationCodeConfiguration <a name="AppServiceSourceControlGithubActionConfigurationCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/appservicesourcecontrol"

&appservicesourcecontrol.AppServiceSourceControlGithubActionConfigurationCodeConfiguration {
	RuntimeStack: *string,
	RuntimeVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeStack">RuntimeStack</a></code> | <code>*string</code> | The value to use for the Runtime Stack in the workflow file content for code base apps. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | The value to use for the Runtime Version in the workflow file content for code base apps. |

---

##### `RuntimeStack`<sup>Required</sup> <a name="RuntimeStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeStack"></a>

```go
RuntimeStack *string
```

- *Type:* *string

The value to use for the Runtime Stack in the workflow file content for code base apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#runtime_stack AppServiceSourceControlA#runtime_stack}

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeVersion"></a>

```go
RuntimeVersion *string
```

- *Type:* *string

The value to use for the Runtime Version in the workflow file content for code base apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#runtime_version AppServiceSourceControlA#runtime_version}

---

### AppServiceSourceControlGithubActionConfigurationContainerConfiguration <a name="AppServiceSourceControlGithubActionConfigurationContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/appservicesourcecontrol"

&appservicesourcecontrol.AppServiceSourceControlGithubActionConfigurationContainerConfiguration {
	ImageName: *string,
	RegistryUrl: *string,
	RegistryPassword: *string,
	RegistryUsername: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.imageName">ImageName</a></code> | <code>*string</code> | The image name for the build. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUrl">RegistryUrl</a></code> | <code>*string</code> | The server URL for the container registry where the build will be hosted. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryPassword">RegistryPassword</a></code> | <code>*string</code> | The password used to upload the image to the container registry. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUsername">RegistryUsername</a></code> | <code>*string</code> | The username used to upload the image to the container registry. |

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

The image name for the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#image_name AppServiceSourceControlA#image_name}

---

##### `RegistryUrl`<sup>Required</sup> <a name="RegistryUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUrl"></a>

```go
RegistryUrl *string
```

- *Type:* *string

The server URL for the container registry where the build will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#registry_url AppServiceSourceControlA#registry_url}

---

##### `RegistryPassword`<sup>Optional</sup> <a name="RegistryPassword" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryPassword"></a>

```go
RegistryPassword *string
```

- *Type:* *string

The password used to upload the image to the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#registry_password AppServiceSourceControlA#registry_password}

---

##### `RegistryUsername`<sup>Optional</sup> <a name="RegistryUsername" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUsername"></a>

```go
RegistryUsername *string
```

- *Type:* *string

The username used to upload the image to the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#registry_username AppServiceSourceControlA#registry_username}

---

### AppServiceSourceControlTimeouts <a name="AppServiceSourceControlTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/appservicesourcecontrol"

&appservicesourcecontrol.AppServiceSourceControlTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#create AppServiceSourceControlA#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#delete AppServiceSourceControlA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#read AppServiceSourceControlA#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#create AppServiceSourceControlA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#delete AppServiceSourceControlA#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/app_service_source_control#read AppServiceSourceControlA#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference <a name="AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/appservicesourcecontrol"

appservicesourcecontrol.NewAppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStackInput">RuntimeStackInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStack">RuntimeStack</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuntimeStackInput`<sup>Optional</sup> <a name="RuntimeStackInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStackInput"></a>

```go
func RuntimeStackInput() *string
```

- *Type:* *string

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersionInput"></a>

```go
func RuntimeVersionInput() *string
```

- *Type:* *string

---

##### `RuntimeStack`<sup>Required</sup> <a name="RuntimeStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStack"></a>

```go
func RuntimeStack() *string
```

- *Type:* *string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersion"></a>

```go
func RuntimeVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSourceControlGithubActionConfigurationCodeConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

---


### AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference <a name="AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/appservicesourcecontrol"

appservicesourcecontrol.NewAppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryPassword">ResetRegistryPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryUsername">ResetRegistryUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegistryPassword` <a name="ResetRegistryPassword" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryPassword"></a>

```go
func ResetRegistryPassword()
```

##### `ResetRegistryUsername` <a name="ResetRegistryUsername" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryUsername"></a>

```go
func ResetRegistryUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPasswordInput">RegistryPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrlInput">RegistryUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsernameInput">RegistryUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPassword">RegistryPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrl">RegistryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsername">RegistryUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `RegistryPasswordInput`<sup>Optional</sup> <a name="RegistryPasswordInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPasswordInput"></a>

```go
func RegistryPasswordInput() *string
```

- *Type:* *string

---

##### `RegistryUrlInput`<sup>Optional</sup> <a name="RegistryUrlInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrlInput"></a>

```go
func RegistryUrlInput() *string
```

- *Type:* *string

---

##### `RegistryUsernameInput`<sup>Optional</sup> <a name="RegistryUsernameInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsernameInput"></a>

```go
func RegistryUsernameInput() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `RegistryPassword`<sup>Required</sup> <a name="RegistryPassword" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPassword"></a>

```go
func RegistryPassword() *string
```

- *Type:* *string

---

##### `RegistryUrl`<sup>Required</sup> <a name="RegistryUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrl"></a>

```go
func RegistryUrl() *string
```

- *Type:* *string

---

##### `RegistryUsername`<sup>Required</sup> <a name="RegistryUsername" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsername"></a>

```go
func RegistryUsername() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSourceControlGithubActionConfigurationContainerConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

---


### AppServiceSourceControlGithubActionConfigurationOutputReference <a name="AppServiceSourceControlGithubActionConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/appservicesourcecontrol"

appservicesourcecontrol.NewAppServiceSourceControlGithubActionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSourceControlGithubActionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putCodeConfiguration">PutCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putContainerConfiguration">PutContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetCodeConfiguration">ResetCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetContainerConfiguration">ResetContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetGenerateWorkflowFile">ResetGenerateWorkflowFile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeConfiguration` <a name="PutCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putCodeConfiguration"></a>

```go
func PutCodeConfiguration(value AppServiceSourceControlGithubActionConfigurationCodeConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putCodeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

---

##### `PutContainerConfiguration` <a name="PutContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putContainerConfiguration"></a>

```go
func PutContainerConfiguration(value AppServiceSourceControlGithubActionConfigurationContainerConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putContainerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

---

##### `ResetCodeConfiguration` <a name="ResetCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetCodeConfiguration"></a>

```go
func ResetCodeConfiguration()
```

##### `ResetContainerConfiguration` <a name="ResetContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetContainerConfiguration"></a>

```go
func ResetContainerConfiguration()
```

##### `ResetGenerateWorkflowFile` <a name="ResetGenerateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetGenerateWorkflowFile"></a>

```go
func ResetGenerateWorkflowFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfiguration">CodeConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfiguration">ContainerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.linuxAction">LinuxAction</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfigurationInput">CodeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfigurationInput">ContainerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFileInput">GenerateWorkflowFileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFile">GenerateWorkflowFile</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeConfiguration`<sup>Required</sup> <a name="CodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfiguration"></a>

```go
func CodeConfiguration() AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference</a>

---

##### `ContainerConfiguration`<sup>Required</sup> <a name="ContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfiguration"></a>

```go
func ContainerConfiguration() AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference</a>

---

##### `LinuxAction`<sup>Required</sup> <a name="LinuxAction" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.linuxAction"></a>

```go
func LinuxAction() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CodeConfigurationInput`<sup>Optional</sup> <a name="CodeConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfigurationInput"></a>

```go
func CodeConfigurationInput() AppServiceSourceControlGithubActionConfigurationCodeConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

---

##### `ContainerConfigurationInput`<sup>Optional</sup> <a name="ContainerConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfigurationInput"></a>

```go
func ContainerConfigurationInput() AppServiceSourceControlGithubActionConfigurationContainerConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

---

##### `GenerateWorkflowFileInput`<sup>Optional</sup> <a name="GenerateWorkflowFileInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFileInput"></a>

```go
func GenerateWorkflowFileInput() interface{}
```

- *Type:* interface{}

---

##### `GenerateWorkflowFile`<sup>Required</sup> <a name="GenerateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFile"></a>

```go
func GenerateWorkflowFile() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSourceControlGithubActionConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

---


### AppServiceSourceControlTimeoutsOutputReference <a name="AppServiceSourceControlTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/appservicesourcecontrol"

appservicesourcecontrol.NewAppServiceSourceControlTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSourceControlTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



