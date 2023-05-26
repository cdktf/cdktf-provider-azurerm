# `azurerm_dashboard_grafana`

Refer to the Terraform Registory for docs: [`azurerm_dashboard_grafana`](https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana).

# `dashboardGrafana` Submodule <a name="`dashboardGrafana` Submodule" id="@cdktf/provider-azurerm.dashboardGrafana"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DashboardGrafana <a name="DashboardGrafana" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana azurerm_dashboard_grafana}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer"></a>

```typescript
import { dashboardGrafana } from '@cdktf/provider-azurerm'

new dashboardGrafana.DashboardGrafana(scope: Construct, id: string, config: DashboardGrafanaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig">DashboardGrafanaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig">DashboardGrafanaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putAzureMonitorWorkspaceIntegrations">putAzureMonitorWorkspaceIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetApiKeyEnabled">resetApiKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetAutoGeneratedDomainNameLabelScope">resetAutoGeneratedDomainNameLabelScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetAzureMonitorWorkspaceIntegrations">resetAzureMonitorWorkspaceIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetDeterministicOutboundIpEnabled">resetDeterministicOutboundIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetSku">resetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetZoneRedundancyEnabled">resetZoneRedundancyEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAzureMonitorWorkspaceIntegrations` <a name="putAzureMonitorWorkspaceIntegrations" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putAzureMonitorWorkspaceIntegrations"></a>

```typescript
public putAzureMonitorWorkspaceIntegrations(value: IResolvable | DashboardGrafanaAzureMonitorWorkspaceIntegrations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putAzureMonitorWorkspaceIntegrations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>[]

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putIdentity"></a>

```typescript
public putIdentity(value: DashboardGrafanaIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putTimeouts"></a>

```typescript
public putTimeouts(value: DashboardGrafanaTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a>

---

##### `resetApiKeyEnabled` <a name="resetApiKeyEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetApiKeyEnabled"></a>

```typescript
public resetApiKeyEnabled(): void
```

##### `resetAutoGeneratedDomainNameLabelScope` <a name="resetAutoGeneratedDomainNameLabelScope" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetAutoGeneratedDomainNameLabelScope"></a>

```typescript
public resetAutoGeneratedDomainNameLabelScope(): void
```

##### `resetAzureMonitorWorkspaceIntegrations` <a name="resetAzureMonitorWorkspaceIntegrations" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetAzureMonitorWorkspaceIntegrations"></a>

```typescript
public resetAzureMonitorWorkspaceIntegrations(): void
```

##### `resetDeterministicOutboundIpEnabled` <a name="resetDeterministicOutboundIpEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetDeterministicOutboundIpEnabled"></a>

```typescript
public resetDeterministicOutboundIpEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetSku` <a name="resetSku" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetSku"></a>

```typescript
public resetSku(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZoneRedundancyEnabled` <a name="resetZoneRedundancyEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.resetZoneRedundancyEnabled"></a>

```typescript
public resetZoneRedundancyEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isConstruct"></a>

```typescript
import { dashboardGrafana } from '@cdktf/provider-azurerm'

dashboardGrafana.DashboardGrafana.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformElement"></a>

```typescript
import { dashboardGrafana } from '@cdktf/provider-azurerm'

dashboardGrafana.DashboardGrafana.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformResource"></a>

```typescript
import { dashboardGrafana } from '@cdktf/provider-azurerm'

dashboardGrafana.DashboardGrafana.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.azureMonitorWorkspaceIntegrations">azureMonitorWorkspaceIntegrations</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList">DashboardGrafanaAzureMonitorWorkspaceIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.grafanaVersion">grafanaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference">DashboardGrafanaIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.outboundIp">outboundIp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference">DashboardGrafanaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.apiKeyEnabledInput">apiKeyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.autoGeneratedDomainNameLabelScopeInput">autoGeneratedDomainNameLabelScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.azureMonitorWorkspaceIntegrationsInput">azureMonitorWorkspaceIntegrationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.deterministicOutboundIpEnabledInput">deterministicOutboundIpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.zoneRedundancyEnabledInput">zoneRedundancyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.apiKeyEnabled">apiKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.autoGeneratedDomainNameLabelScope">autoGeneratedDomainNameLabelScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.deterministicOutboundIpEnabled">deterministicOutboundIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.zoneRedundancyEnabled">zoneRedundancyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `azureMonitorWorkspaceIntegrations`<sup>Required</sup> <a name="azureMonitorWorkspaceIntegrations" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.azureMonitorWorkspaceIntegrations"></a>

```typescript
public readonly azureMonitorWorkspaceIntegrations: DashboardGrafanaAzureMonitorWorkspaceIntegrationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList">DashboardGrafanaAzureMonitorWorkspaceIntegrationsList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `grafanaVersion`<sup>Required</sup> <a name="grafanaVersion" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.grafanaVersion"></a>

```typescript
public readonly grafanaVersion: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.identity"></a>

```typescript
public readonly identity: DashboardGrafanaIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference">DashboardGrafanaIdentityOutputReference</a>

---

##### `outboundIp`<sup>Required</sup> <a name="outboundIp" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.outboundIp"></a>

```typescript
public readonly outboundIp: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.timeouts"></a>

```typescript
public readonly timeouts: DashboardGrafanaTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference">DashboardGrafanaTimeoutsOutputReference</a>

---

##### `apiKeyEnabledInput`<sup>Optional</sup> <a name="apiKeyEnabledInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.apiKeyEnabledInput"></a>

```typescript
public readonly apiKeyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoGeneratedDomainNameLabelScopeInput`<sup>Optional</sup> <a name="autoGeneratedDomainNameLabelScopeInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.autoGeneratedDomainNameLabelScopeInput"></a>

```typescript
public readonly autoGeneratedDomainNameLabelScopeInput: string;
```

- *Type:* string

---

##### `azureMonitorWorkspaceIntegrationsInput`<sup>Optional</sup> <a name="azureMonitorWorkspaceIntegrationsInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.azureMonitorWorkspaceIntegrationsInput"></a>

```typescript
public readonly azureMonitorWorkspaceIntegrationsInput: IResolvable | DashboardGrafanaAzureMonitorWorkspaceIntegrations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>[]

---

##### `deterministicOutboundIpEnabledInput`<sup>Optional</sup> <a name="deterministicOutboundIpEnabledInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.deterministicOutboundIpEnabledInput"></a>

```typescript
public readonly deterministicOutboundIpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.identityInput"></a>

```typescript
public readonly identityInput: DashboardGrafanaIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DashboardGrafanaTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a> | cdktf.IResolvable

---

##### `zoneRedundancyEnabledInput`<sup>Optional</sup> <a name="zoneRedundancyEnabledInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.zoneRedundancyEnabledInput"></a>

```typescript
public readonly zoneRedundancyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiKeyEnabled`<sup>Required</sup> <a name="apiKeyEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.apiKeyEnabled"></a>

```typescript
public readonly apiKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoGeneratedDomainNameLabelScope`<sup>Required</sup> <a name="autoGeneratedDomainNameLabelScope" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.autoGeneratedDomainNameLabelScope"></a>

```typescript
public readonly autoGeneratedDomainNameLabelScope: string;
```

- *Type:* string

---

##### `deterministicOutboundIpEnabled`<sup>Required</sup> <a name="deterministicOutboundIpEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.deterministicOutboundIpEnabled"></a>

```typescript
public readonly deterministicOutboundIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zoneRedundancyEnabled`<sup>Required</sup> <a name="zoneRedundancyEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.zoneRedundancyEnabled"></a>

```typescript
public readonly zoneRedundancyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafana.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DashboardGrafanaAzureMonitorWorkspaceIntegrations <a name="DashboardGrafanaAzureMonitorWorkspaceIntegrations" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations.Initializer"></a>

```typescript
import { dashboardGrafana } from '@cdktf/provider-azurerm'

const dashboardGrafanaAzureMonitorWorkspaceIntegrations: dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#resource_id DashboardGrafana#resource_id}. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#resource_id DashboardGrafana#resource_id}.

---

### DashboardGrafanaConfig <a name="DashboardGrafanaConfig" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.Initializer"></a>

```typescript
import { dashboardGrafana } from '@cdktf/provider-azurerm'

const dashboardGrafanaConfig: dashboardGrafana.DashboardGrafanaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#location DashboardGrafana#location}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#name DashboardGrafana#name}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#resource_group_name DashboardGrafana#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.apiKeyEnabled">apiKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#api_key_enabled DashboardGrafana#api_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.autoGeneratedDomainNameLabelScope">autoGeneratedDomainNameLabelScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#auto_generated_domain_name_label_scope DashboardGrafana#auto_generated_domain_name_label_scope}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.azureMonitorWorkspaceIntegrations">azureMonitorWorkspaceIntegrations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>[]</code> | azure_monitor_workspace_integrations block. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.deterministicOutboundIpEnabled">deterministicOutboundIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#deterministic_outbound_ip_enabled DashboardGrafana#deterministic_outbound_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#id DashboardGrafana#id}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#public_network_access_enabled DashboardGrafana#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#sku DashboardGrafana#sku}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#tags DashboardGrafana#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.zoneRedundancyEnabled">zoneRedundancyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#zone_redundancy_enabled DashboardGrafana#zone_redundancy_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#location DashboardGrafana#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#name DashboardGrafana#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#resource_group_name DashboardGrafana#resource_group_name}.

---

##### `apiKeyEnabled`<sup>Optional</sup> <a name="apiKeyEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.apiKeyEnabled"></a>

```typescript
public readonly apiKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#api_key_enabled DashboardGrafana#api_key_enabled}.

---

##### `autoGeneratedDomainNameLabelScope`<sup>Optional</sup> <a name="autoGeneratedDomainNameLabelScope" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.autoGeneratedDomainNameLabelScope"></a>

```typescript
public readonly autoGeneratedDomainNameLabelScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#auto_generated_domain_name_label_scope DashboardGrafana#auto_generated_domain_name_label_scope}.

---

##### `azureMonitorWorkspaceIntegrations`<sup>Optional</sup> <a name="azureMonitorWorkspaceIntegrations" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.azureMonitorWorkspaceIntegrations"></a>

```typescript
public readonly azureMonitorWorkspaceIntegrations: IResolvable | DashboardGrafanaAzureMonitorWorkspaceIntegrations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>[]

azure_monitor_workspace_integrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#azure_monitor_workspace_integrations DashboardGrafana#azure_monitor_workspace_integrations}

---

##### `deterministicOutboundIpEnabled`<sup>Optional</sup> <a name="deterministicOutboundIpEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.deterministicOutboundIpEnabled"></a>

```typescript
public readonly deterministicOutboundIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#deterministic_outbound_ip_enabled DashboardGrafana#deterministic_outbound_ip_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#id DashboardGrafana#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.identity"></a>

```typescript
public readonly identity: DashboardGrafanaIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#identity DashboardGrafana#identity}

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#public_network_access_enabled DashboardGrafana#public_network_access_enabled}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#sku DashboardGrafana#sku}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#tags DashboardGrafana#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DashboardGrafanaTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#timeouts DashboardGrafana#timeouts}

---

##### `zoneRedundancyEnabled`<sup>Optional</sup> <a name="zoneRedundancyEnabled" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaConfig.property.zoneRedundancyEnabled"></a>

```typescript
public readonly zoneRedundancyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#zone_redundancy_enabled DashboardGrafana#zone_redundancy_enabled}.

---

### DashboardGrafanaIdentity <a name="DashboardGrafanaIdentity" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity.Initializer"></a>

```typescript
import { dashboardGrafana } from '@cdktf/provider-azurerm'

const dashboardGrafanaIdentity: dashboardGrafana.DashboardGrafanaIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#type DashboardGrafana#type}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#identity_ids DashboardGrafana#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#type DashboardGrafana#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#identity_ids DashboardGrafana#identity_ids}.

---

### DashboardGrafanaTimeouts <a name="DashboardGrafanaTimeouts" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.Initializer"></a>

```typescript
import { dashboardGrafana } from '@cdktf/provider-azurerm'

const dashboardGrafanaTimeouts: dashboardGrafana.DashboardGrafanaTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#create DashboardGrafana#create}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#delete DashboardGrafana#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#read DashboardGrafana#read}. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#update DashboardGrafana#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#create DashboardGrafana#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#delete DashboardGrafana#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#read DashboardGrafana#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/dashboard_grafana#update DashboardGrafana#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DashboardGrafanaAzureMonitorWorkspaceIntegrationsList <a name="DashboardGrafanaAzureMonitorWorkspaceIntegrationsList" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer"></a>

```typescript
import { dashboardGrafana } from '@cdktf/provider-azurerm'

new dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.get"></a>

```typescript
public get(index: number): DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DashboardGrafanaAzureMonitorWorkspaceIntegrations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a>[]

---


### DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference <a name="DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer"></a>

```typescript
import { dashboardGrafana } from '@cdktf/provider-azurerm'

new dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DashboardGrafanaAzureMonitorWorkspaceIntegrations | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaAzureMonitorWorkspaceIntegrations">DashboardGrafanaAzureMonitorWorkspaceIntegrations</a> | cdktf.IResolvable

---


### DashboardGrafanaIdentityOutputReference <a name="DashboardGrafanaIdentityOutputReference" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.Initializer"></a>

```typescript
import { dashboardGrafana } from '@cdktf/provider-azurerm'

new dashboardGrafana.DashboardGrafanaIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DashboardGrafanaIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaIdentity">DashboardGrafanaIdentity</a>

---


### DashboardGrafanaTimeoutsOutputReference <a name="DashboardGrafanaTimeoutsOutputReference" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.Initializer"></a>

```typescript
import { dashboardGrafana } from '@cdktf/provider-azurerm'

new dashboardGrafana.DashboardGrafanaTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DashboardGrafanaTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dashboardGrafana.DashboardGrafanaTimeouts">DashboardGrafanaTimeouts</a> | cdktf.IResolvable

---



