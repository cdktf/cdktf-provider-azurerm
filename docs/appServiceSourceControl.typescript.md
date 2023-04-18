# `azurerm_app_service_source_control`

Refer to the Terraform Registory for docs: [`azurerm_app_service_source_control`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control).

# `appServiceSourceControl` Submodule <a name="`appServiceSourceControl` Submodule" id="@cdktf/provider-azurerm.appServiceSourceControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceSourceControlA <a name="AppServiceSourceControlA" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control azurerm_app_service_source_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer"></a>

```typescript
import { appServiceSourceControl } from '@cdktf/provider-azurerm'

new appServiceSourceControl.AppServiceSourceControlA(scope: Construct, id: string, config: AppServiceSourceControlAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig">AppServiceSourceControlAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig">AppServiceSourceControlAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putGithubActionConfiguration">putGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetGithubActionConfiguration">resetGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetRepoUrl">resetRepoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetRollbackEnabled">resetRollbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseLocalGit">resetUseLocalGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseManualIntegration">resetUseManualIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseMercurial">resetUseMercurial</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putGithubActionConfiguration` <a name="putGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putGithubActionConfiguration"></a>

```typescript
public putGithubActionConfiguration(value: AppServiceSourceControlGithubActionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putGithubActionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putTimeouts"></a>

```typescript
public putTimeouts(value: AppServiceSourceControlTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a>

---

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetGithubActionConfiguration` <a name="resetGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetGithubActionConfiguration"></a>

```typescript
public resetGithubActionConfiguration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRepoUrl` <a name="resetRepoUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetRepoUrl"></a>

```typescript
public resetRepoUrl(): void
```

##### `resetRollbackEnabled` <a name="resetRollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetRollbackEnabled"></a>

```typescript
public resetRollbackEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUseLocalGit` <a name="resetUseLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseLocalGit"></a>

```typescript
public resetUseLocalGit(): void
```

##### `resetUseManualIntegration` <a name="resetUseManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseManualIntegration"></a>

```typescript
public resetUseManualIntegration(): void
```

##### `resetUseMercurial` <a name="resetUseMercurial" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseMercurial"></a>

```typescript
public resetUseMercurial(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isConstruct"></a>

```typescript
import { appServiceSourceControl } from '@cdktf/provider-azurerm'

appServiceSourceControl.AppServiceSourceControlA.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformElement"></a>

```typescript
import { appServiceSourceControl } from '@cdktf/provider-azurerm'

appServiceSourceControl.AppServiceSourceControlA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformResource"></a>

```typescript
import { appServiceSourceControl } from '@cdktf/provider-azurerm'

appServiceSourceControl.AppServiceSourceControlA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.githubActionConfiguration">githubActionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.scmType">scmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference">AppServiceSourceControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.usesGithubAction">usesGithubAction</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.githubActionConfigurationInput">githubActionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.repoUrlInput">repoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.rollbackEnabledInput">rollbackEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useLocalGitInput">useLocalGitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useManualIntegrationInput">useManualIntegrationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useMercurialInput">useMercurialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.repoUrl">repoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.rollbackEnabled">rollbackEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useLocalGit">useLocalGit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useManualIntegration">useManualIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useMercurial">useMercurial</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `githubActionConfiguration`<sup>Required</sup> <a name="githubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.githubActionConfiguration"></a>

```typescript
public readonly githubActionConfiguration: AppServiceSourceControlGithubActionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationOutputReference</a>

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.scmType"></a>

```typescript
public readonly scmType: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceSourceControlTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference">AppServiceSourceControlTimeoutsOutputReference</a>

---

##### `usesGithubAction`<sup>Required</sup> <a name="usesGithubAction" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.usesGithubAction"></a>

```typescript
public readonly usesGithubAction: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `githubActionConfigurationInput`<sup>Optional</sup> <a name="githubActionConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.githubActionConfigurationInput"></a>

```typescript
public readonly githubActionConfigurationInput: AppServiceSourceControlGithubActionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `repoUrlInput`<sup>Optional</sup> <a name="repoUrlInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.repoUrlInput"></a>

```typescript
public readonly repoUrlInput: string;
```

- *Type:* string

---

##### `rollbackEnabledInput`<sup>Optional</sup> <a name="rollbackEnabledInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.rollbackEnabledInput"></a>

```typescript
public readonly rollbackEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: AppServiceSourceControlTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a> | cdktf.IResolvable

---

##### `useLocalGitInput`<sup>Optional</sup> <a name="useLocalGitInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useLocalGitInput"></a>

```typescript
public readonly useLocalGitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useManualIntegrationInput`<sup>Optional</sup> <a name="useManualIntegrationInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useManualIntegrationInput"></a>

```typescript
public readonly useManualIntegrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useMercurialInput`<sup>Optional</sup> <a name="useMercurialInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useMercurialInput"></a>

```typescript
public readonly useMercurialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repoUrl`<sup>Required</sup> <a name="repoUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.repoUrl"></a>

```typescript
public readonly repoUrl: string;
```

- *Type:* string

---

##### `rollbackEnabled`<sup>Required</sup> <a name="rollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.rollbackEnabled"></a>

```typescript
public readonly rollbackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useLocalGit`<sup>Required</sup> <a name="useLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useLocalGit"></a>

```typescript
public readonly useLocalGit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useManualIntegration`<sup>Required</sup> <a name="useManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useManualIntegration"></a>

```typescript
public readonly useManualIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useMercurial`<sup>Required</sup> <a name="useMercurial" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useMercurial"></a>

```typescript
public readonly useMercurial: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceSourceControlAConfig <a name="AppServiceSourceControlAConfig" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.Initializer"></a>

```typescript
import { appServiceSourceControl } from '@cdktf/provider-azurerm'

const appServiceSourceControlAConfig: appServiceSourceControl.AppServiceSourceControlAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.appId">appId</a></code> | <code>string</code> | The ID of the Windows or Linux Web App. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.branch">branch</a></code> | <code>string</code> | The branch name to use for deployments. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.githubActionConfiguration">githubActionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | github_action_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#id AppServiceSourceControlA#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.repoUrl">repoUrl</a></code> | <code>string</code> | The URL for the repository. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.rollbackEnabled">rollbackEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the Deployment Rollback be enabled? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useLocalGit">useLocalGit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the App use local Git configuration. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useManualIntegration">useManualIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should code be deployed manually. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useMercurial">useMercurial</a></code> | <code>boolean \| cdktf.IResolvable</code> | The repository specified is Mercurial. Defaults to `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The ID of the Windows or Linux Web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#app_id AppServiceSourceControlA#app_id}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

The branch name to use for deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#branch AppServiceSourceControlA#branch}

---

##### `githubActionConfiguration`<sup>Optional</sup> <a name="githubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.githubActionConfiguration"></a>

```typescript
public readonly githubActionConfiguration: AppServiceSourceControlGithubActionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

github_action_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#github_action_configuration AppServiceSourceControlA#github_action_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#id AppServiceSourceControlA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repoUrl`<sup>Optional</sup> <a name="repoUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.repoUrl"></a>

```typescript
public readonly repoUrl: string;
```

- *Type:* string

The URL for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#repo_url AppServiceSourceControlA#repo_url}

---

##### `rollbackEnabled`<sup>Optional</sup> <a name="rollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.rollbackEnabled"></a>

```typescript
public readonly rollbackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the Deployment Rollback be enabled? Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#rollback_enabled AppServiceSourceControlA#rollback_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceSourceControlTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#timeouts AppServiceSourceControlA#timeouts}

---

##### `useLocalGit`<sup>Optional</sup> <a name="useLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useLocalGit"></a>

```typescript
public readonly useLocalGit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the App use local Git configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#use_local_git AppServiceSourceControlA#use_local_git}

---

##### `useManualIntegration`<sup>Optional</sup> <a name="useManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useManualIntegration"></a>

```typescript
public readonly useManualIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should code be deployed manually.

Set to `false` to enable continuous integration, such as webhooks into online repos such as GitHub. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#use_manual_integration AppServiceSourceControlA#use_manual_integration}

---

##### `useMercurial`<sup>Optional</sup> <a name="useMercurial" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useMercurial"></a>

```typescript
public readonly useMercurial: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The repository specified is Mercurial. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#use_mercurial AppServiceSourceControlA#use_mercurial}

---

### AppServiceSourceControlGithubActionConfiguration <a name="AppServiceSourceControlGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.Initializer"></a>

```typescript
import { appServiceSourceControl } from '@cdktf/provider-azurerm'

const appServiceSourceControlGithubActionConfiguration: appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.codeConfiguration">codeConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a></code> | code_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a></code> | container_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.generateWorkflowFile">generateWorkflowFile</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the service generate the GitHub Action Workflow file. Defaults to `true`. |

---

##### `codeConfiguration`<sup>Optional</sup> <a name="codeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.codeConfiguration"></a>

```typescript
public readonly codeConfiguration: AppServiceSourceControlGithubActionConfigurationCodeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

code_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#code_configuration AppServiceSourceControlA#code_configuration}

---

##### `containerConfiguration`<sup>Optional</sup> <a name="containerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.containerConfiguration"></a>

```typescript
public readonly containerConfiguration: AppServiceSourceControlGithubActionConfigurationContainerConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

container_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#container_configuration AppServiceSourceControlA#container_configuration}

---

##### `generateWorkflowFile`<sup>Optional</sup> <a name="generateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.generateWorkflowFile"></a>

```typescript
public readonly generateWorkflowFile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the service generate the GitHub Action Workflow file. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#generate_workflow_file AppServiceSourceControlA#generate_workflow_file}

---

### AppServiceSourceControlGithubActionConfigurationCodeConfiguration <a name="AppServiceSourceControlGithubActionConfigurationCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.Initializer"></a>

```typescript
import { appServiceSourceControl } from '@cdktf/provider-azurerm'

const appServiceSourceControlGithubActionConfigurationCodeConfiguration: appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeStack">runtimeStack</a></code> | <code>string</code> | The value to use for the Runtime Stack in the workflow file content for code base apps. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | The value to use for the Runtime Version in the workflow file content for code base apps. |

---

##### `runtimeStack`<sup>Required</sup> <a name="runtimeStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeStack"></a>

```typescript
public readonly runtimeStack: string;
```

- *Type:* string

The value to use for the Runtime Stack in the workflow file content for code base apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#runtime_stack AppServiceSourceControlA#runtime_stack}

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

The value to use for the Runtime Version in the workflow file content for code base apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#runtime_version AppServiceSourceControlA#runtime_version}

---

### AppServiceSourceControlGithubActionConfigurationContainerConfiguration <a name="AppServiceSourceControlGithubActionConfigurationContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.Initializer"></a>

```typescript
import { appServiceSourceControl } from '@cdktf/provider-azurerm'

const appServiceSourceControlGithubActionConfigurationContainerConfiguration: appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.imageName">imageName</a></code> | <code>string</code> | The image name for the build. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUrl">registryUrl</a></code> | <code>string</code> | The server URL for the container registry where the build will be hosted. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryPassword">registryPassword</a></code> | <code>string</code> | The password used to upload the image to the container registry. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUsername">registryUsername</a></code> | <code>string</code> | The username used to upload the image to the container registry. |

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

The image name for the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#image_name AppServiceSourceControlA#image_name}

---

##### `registryUrl`<sup>Required</sup> <a name="registryUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUrl"></a>

```typescript
public readonly registryUrl: string;
```

- *Type:* string

The server URL for the container registry where the build will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#registry_url AppServiceSourceControlA#registry_url}

---

##### `registryPassword`<sup>Optional</sup> <a name="registryPassword" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryPassword"></a>

```typescript
public readonly registryPassword: string;
```

- *Type:* string

The password used to upload the image to the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#registry_password AppServiceSourceControlA#registry_password}

---

##### `registryUsername`<sup>Optional</sup> <a name="registryUsername" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUsername"></a>

```typescript
public readonly registryUsername: string;
```

- *Type:* string

The username used to upload the image to the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#registry_username AppServiceSourceControlA#registry_username}

---

### AppServiceSourceControlTimeouts <a name="AppServiceSourceControlTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.Initializer"></a>

```typescript
import { appServiceSourceControl } from '@cdktf/provider-azurerm'

const appServiceSourceControlTimeouts: appServiceSourceControl.AppServiceSourceControlTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#create AppServiceSourceControlA#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#delete AppServiceSourceControlA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#read AppServiceSourceControlA#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#create AppServiceSourceControlA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#delete AppServiceSourceControlA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_source_control#read AppServiceSourceControlA#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference <a name="AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer"></a>

```typescript
import { appServiceSourceControl } from '@cdktf/provider-azurerm'

new appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStackInput">runtimeStackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStack">runtimeStack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `runtimeStackInput`<sup>Optional</sup> <a name="runtimeStackInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStackInput"></a>

```typescript
public readonly runtimeStackInput: string;
```

- *Type:* string

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `runtimeStack`<sup>Required</sup> <a name="runtimeStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStack"></a>

```typescript
public readonly runtimeStack: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSourceControlGithubActionConfigurationCodeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

---


### AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference <a name="AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer"></a>

```typescript
import { appServiceSourceControl } from '@cdktf/provider-azurerm'

new appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryPassword">resetRegistryPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryUsername">resetRegistryUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegistryPassword` <a name="resetRegistryPassword" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryPassword"></a>

```typescript
public resetRegistryPassword(): void
```

##### `resetRegistryUsername` <a name="resetRegistryUsername" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryUsername"></a>

```typescript
public resetRegistryUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPasswordInput">registryPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrlInput">registryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsernameInput">registryUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPassword">registryPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrl">registryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsername">registryUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `registryPasswordInput`<sup>Optional</sup> <a name="registryPasswordInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPasswordInput"></a>

```typescript
public readonly registryPasswordInput: string;
```

- *Type:* string

---

##### `registryUrlInput`<sup>Optional</sup> <a name="registryUrlInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrlInput"></a>

```typescript
public readonly registryUrlInput: string;
```

- *Type:* string

---

##### `registryUsernameInput`<sup>Optional</sup> <a name="registryUsernameInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsernameInput"></a>

```typescript
public readonly registryUsernameInput: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `registryPassword`<sup>Required</sup> <a name="registryPassword" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPassword"></a>

```typescript
public readonly registryPassword: string;
```

- *Type:* string

---

##### `registryUrl`<sup>Required</sup> <a name="registryUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrl"></a>

```typescript
public readonly registryUrl: string;
```

- *Type:* string

---

##### `registryUsername`<sup>Required</sup> <a name="registryUsername" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsername"></a>

```typescript
public readonly registryUsername: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSourceControlGithubActionConfigurationContainerConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

---


### AppServiceSourceControlGithubActionConfigurationOutputReference <a name="AppServiceSourceControlGithubActionConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer"></a>

```typescript
import { appServiceSourceControl } from '@cdktf/provider-azurerm'

new appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putCodeConfiguration">putCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putContainerConfiguration">putContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetCodeConfiguration">resetCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetContainerConfiguration">resetContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetGenerateWorkflowFile">resetGenerateWorkflowFile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeConfiguration` <a name="putCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putCodeConfiguration"></a>

```typescript
public putCodeConfiguration(value: AppServiceSourceControlGithubActionConfigurationCodeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putCodeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

---

##### `putContainerConfiguration` <a name="putContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putContainerConfiguration"></a>

```typescript
public putContainerConfiguration(value: AppServiceSourceControlGithubActionConfigurationContainerConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putContainerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

---

##### `resetCodeConfiguration` <a name="resetCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetCodeConfiguration"></a>

```typescript
public resetCodeConfiguration(): void
```

##### `resetContainerConfiguration` <a name="resetContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetContainerConfiguration"></a>

```typescript
public resetContainerConfiguration(): void
```

##### `resetGenerateWorkflowFile` <a name="resetGenerateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetGenerateWorkflowFile"></a>

```typescript
public resetGenerateWorkflowFile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfiguration">codeConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.linuxAction">linuxAction</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfigurationInput">codeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfigurationInput">containerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFileInput">generateWorkflowFileInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFile">generateWorkflowFile</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeConfiguration`<sup>Required</sup> <a name="codeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfiguration"></a>

```typescript
public readonly codeConfiguration: AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference</a>

---

##### `containerConfiguration`<sup>Required</sup> <a name="containerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfiguration"></a>

```typescript
public readonly containerConfiguration: AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference</a>

---

##### `linuxAction`<sup>Required</sup> <a name="linuxAction" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.linuxAction"></a>

```typescript
public readonly linuxAction: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `codeConfigurationInput`<sup>Optional</sup> <a name="codeConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfigurationInput"></a>

```typescript
public readonly codeConfigurationInput: AppServiceSourceControlGithubActionConfigurationCodeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

---

##### `containerConfigurationInput`<sup>Optional</sup> <a name="containerConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfigurationInput"></a>

```typescript
public readonly containerConfigurationInput: AppServiceSourceControlGithubActionConfigurationContainerConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

---

##### `generateWorkflowFileInput`<sup>Optional</sup> <a name="generateWorkflowFileInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFileInput"></a>

```typescript
public readonly generateWorkflowFileInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `generateWorkflowFile`<sup>Required</sup> <a name="generateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFile"></a>

```typescript
public readonly generateWorkflowFile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSourceControlGithubActionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

---


### AppServiceSourceControlTimeoutsOutputReference <a name="AppServiceSourceControlTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer"></a>

```typescript
import { appServiceSourceControl } from '@cdktf/provider-azurerm'

new appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppServiceSourceControlTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a> | cdktf.IResolvable

---



