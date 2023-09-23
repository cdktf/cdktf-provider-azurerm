# `azurerm_sentinel_data_connector_threat_intelligence`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_data_connector_threat_intelligence`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence).

# `sentinelDataConnectorThreatIntelligence` Submodule <a name="`sentinelDataConnectorThreatIntelligence` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorThreatIntelligence <a name="SentinelDataConnectorThreatIntelligence" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence azurerm_sentinel_data_connector_threat_intelligence}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.Initializer"></a>

```typescript
import { sentinelDataConnectorThreatIntelligence } from '@cdktf/provider-azurerm'

new sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence(scope: Construct, id: string, config: SentinelDataConnectorThreatIntelligenceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig">SentinelDataConnectorThreatIntelligenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig">SentinelDataConnectorThreatIntelligenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetLookbackDate">resetLookbackDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.putTimeouts"></a>

```typescript
public putTimeouts(value: SentinelDataConnectorThreatIntelligenceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts">SentinelDataConnectorThreatIntelligenceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLookbackDate` <a name="resetLookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetLookbackDate"></a>

```typescript
public resetLookbackDate(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isConstruct"></a>

```typescript
import { sentinelDataConnectorThreatIntelligence } from '@cdktf/provider-azurerm'

sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isTerraformElement"></a>

```typescript
import { sentinelDataConnectorThreatIntelligence } from '@cdktf/provider-azurerm'

sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isTerraformResource"></a>

```typescript
import { sentinelDataConnectorThreatIntelligence } from '@cdktf/provider-azurerm'

sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference">SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.lookbackDateInput">lookbackDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts">SentinelDataConnectorThreatIntelligenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.lookbackDate">lookbackDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference">SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `lookbackDateInput`<sup>Optional</sup> <a name="lookbackDateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.lookbackDateInput"></a>

```typescript
public readonly lookbackDateInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SentinelDataConnectorThreatIntelligenceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts">SentinelDataConnectorThreatIntelligenceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `lookbackDate`<sup>Required</sup> <a name="lookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.lookbackDate"></a>

```typescript
public readonly lookbackDate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligence.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorThreatIntelligenceConfig <a name="SentinelDataConnectorThreatIntelligenceConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.Initializer"></a>

```typescript
import { sentinelDataConnectorThreatIntelligence } from '@cdktf/provider-azurerm'

const sentinelDataConnectorThreatIntelligenceConfig: sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorThreatIntelligence#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#name SentinelDataConnectorThreatIntelligence#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#id SentinelDataConnectorThreatIntelligence#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.lookbackDate">lookbackDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#lookback_date SentinelDataConnectorThreatIntelligence#lookback_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#tenant_id SentinelDataConnectorThreatIntelligence#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts">SentinelDataConnectorThreatIntelligenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorThreatIntelligence#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#name SentinelDataConnectorThreatIntelligence#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#id SentinelDataConnectorThreatIntelligence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lookbackDate`<sup>Optional</sup> <a name="lookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.lookbackDate"></a>

```typescript
public readonly lookbackDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#lookback_date SentinelDataConnectorThreatIntelligence#lookback_date}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#tenant_id SentinelDataConnectorThreatIntelligence#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelDataConnectorThreatIntelligenceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts">SentinelDataConnectorThreatIntelligenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#timeouts SentinelDataConnectorThreatIntelligence#timeouts}

---

### SentinelDataConnectorThreatIntelligenceTimeouts <a name="SentinelDataConnectorThreatIntelligenceTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts.Initializer"></a>

```typescript
import { sentinelDataConnectorThreatIntelligence } from '@cdktf/provider-azurerm'

const sentinelDataConnectorThreatIntelligenceTimeouts: sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#create SentinelDataConnectorThreatIntelligence#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#delete SentinelDataConnectorThreatIntelligence#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#read SentinelDataConnectorThreatIntelligence#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#create SentinelDataConnectorThreatIntelligence#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#delete SentinelDataConnectorThreatIntelligence#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/sentinel_data_connector_threat_intelligence#read SentinelDataConnectorThreatIntelligence#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference <a name="SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.Initializer"></a>

```typescript
import { sentinelDataConnectorThreatIntelligence } from '@cdktf/provider-azurerm'

new sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts">SentinelDataConnectorThreatIntelligenceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelDataConnectorThreatIntelligenceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligence.SentinelDataConnectorThreatIntelligenceTimeouts">SentinelDataConnectorThreatIntelligenceTimeouts</a>

---



