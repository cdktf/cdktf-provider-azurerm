# `azurerm_sentinel_data_connector_microsoft_cloud_app_security`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_data_connector_microsoft_cloud_app_security`](https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security).

# `sentinelDataConnectorMicrosoftCloudAppSecurity` Submodule <a name="`sentinelDataConnectorMicrosoftCloudAppSecurity` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorMicrosoftCloudAppSecurity <a name="SentinelDataConnectorMicrosoftCloudAppSecurity" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security azurerm_sentinel_data_connector_microsoft_cloud_app_security}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.Initializer"></a>

```typescript
import { sentinelDataConnectorMicrosoftCloudAppSecurity } from '@cdktf/provider-azurerm'

new sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity(scope: Construct, id: string, config: SentinelDataConnectorMicrosoftCloudAppSecurityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig">SentinelDataConnectorMicrosoftCloudAppSecurityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig">SentinelDataConnectorMicrosoftCloudAppSecurityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetAlertsEnabled">resetAlertsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetDiscoveryLogsEnabled">resetDiscoveryLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.putTimeouts"></a>

```typescript
public putTimeouts(value: SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts">SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts</a>

---

##### `resetAlertsEnabled` <a name="resetAlertsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetAlertsEnabled"></a>

```typescript
public resetAlertsEnabled(): void
```

##### `resetDiscoveryLogsEnabled` <a name="resetDiscoveryLogsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetDiscoveryLogsEnabled"></a>

```typescript
public resetDiscoveryLogsEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isConstruct"></a>

```typescript
import { sentinelDataConnectorMicrosoftCloudAppSecurity } from '@cdktf/provider-azurerm'

sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isTerraformElement"></a>

```typescript
import { sentinelDataConnectorMicrosoftCloudAppSecurity } from '@cdktf/provider-azurerm'

sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isTerraformResource"></a>

```typescript
import { sentinelDataConnectorMicrosoftCloudAppSecurity } from '@cdktf/provider-azurerm'

sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference">SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.alertsEnabledInput">alertsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.discoveryLogsEnabledInput">discoveryLogsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts">SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.alertsEnabled">alertsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.discoveryLogsEnabled">discoveryLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference">SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference</a>

---

##### `alertsEnabledInput`<sup>Optional</sup> <a name="alertsEnabledInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.alertsEnabledInput"></a>

```typescript
public readonly alertsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `discoveryLogsEnabledInput`<sup>Optional</sup> <a name="discoveryLogsEnabledInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.discoveryLogsEnabledInput"></a>

```typescript
public readonly discoveryLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts">SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts</a> | cdktf.IResolvable

---

##### `alertsEnabled`<sup>Required</sup> <a name="alertsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.alertsEnabled"></a>

```typescript
public readonly alertsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `discoveryLogsEnabled`<sup>Required</sup> <a name="discoveryLogsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.discoveryLogsEnabled"></a>

```typescript
public readonly discoveryLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorMicrosoftCloudAppSecurityConfig <a name="SentinelDataConnectorMicrosoftCloudAppSecurityConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.Initializer"></a>

```typescript
import { sentinelDataConnectorMicrosoftCloudAppSecurity } from '@cdktf/provider-azurerm'

const sentinelDataConnectorMicrosoftCloudAppSecurityConfig: sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#log_analytics_workspace_id SentinelDataConnectorMicrosoftCloudAppSecurity#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#name SentinelDataConnectorMicrosoftCloudAppSecurity#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.alertsEnabled">alertsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#alerts_enabled SentinelDataConnectorMicrosoftCloudAppSecurity#alerts_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.discoveryLogsEnabled">discoveryLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#discovery_logs_enabled SentinelDataConnectorMicrosoftCloudAppSecurity#discovery_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#id SentinelDataConnectorMicrosoftCloudAppSecurity#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#tenant_id SentinelDataConnectorMicrosoftCloudAppSecurity#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts">SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#log_analytics_workspace_id SentinelDataConnectorMicrosoftCloudAppSecurity#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#name SentinelDataConnectorMicrosoftCloudAppSecurity#name}.

---

##### `alertsEnabled`<sup>Optional</sup> <a name="alertsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.alertsEnabled"></a>

```typescript
public readonly alertsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#alerts_enabled SentinelDataConnectorMicrosoftCloudAppSecurity#alerts_enabled}.

---

##### `discoveryLogsEnabled`<sup>Optional</sup> <a name="discoveryLogsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.discoveryLogsEnabled"></a>

```typescript
public readonly discoveryLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#discovery_logs_enabled SentinelDataConnectorMicrosoftCloudAppSecurity#discovery_logs_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#id SentinelDataConnectorMicrosoftCloudAppSecurity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#tenant_id SentinelDataConnectorMicrosoftCloudAppSecurity#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts">SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#timeouts SentinelDataConnectorMicrosoftCloudAppSecurity#timeouts}

---

### SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts <a name="SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.Initializer"></a>

```typescript
import { sentinelDataConnectorMicrosoftCloudAppSecurity } from '@cdktf/provider-azurerm'

const sentinelDataConnectorMicrosoftCloudAppSecurityTimeouts: sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#create SentinelDataConnectorMicrosoftCloudAppSecurity#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#delete SentinelDataConnectorMicrosoftCloudAppSecurity#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#read SentinelDataConnectorMicrosoftCloudAppSecurity#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#update SentinelDataConnectorMicrosoftCloudAppSecurity#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#create SentinelDataConnectorMicrosoftCloudAppSecurity#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#delete SentinelDataConnectorMicrosoftCloudAppSecurity#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#read SentinelDataConnectorMicrosoftCloudAppSecurity#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_cloud_app_security#update SentinelDataConnectorMicrosoftCloudAppSecurity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference <a name="SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.Initializer"></a>

```typescript
import { sentinelDataConnectorMicrosoftCloudAppSecurity } from '@cdktf/provider-azurerm'

new sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts">SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftCloudAppSecurity.SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts">SentinelDataConnectorMicrosoftCloudAppSecurityTimeouts</a> | cdktf.IResolvable

---



