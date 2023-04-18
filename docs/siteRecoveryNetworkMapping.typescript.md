# `azurerm_site_recovery_network_mapping`

Refer to the Terraform Registory for docs: [`azurerm_site_recovery_network_mapping`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping).

# `siteRecoveryNetworkMapping` Submodule <a name="`siteRecoveryNetworkMapping` Submodule" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryNetworkMapping <a name="SiteRecoveryNetworkMapping" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping azurerm_site_recovery_network_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer"></a>

```typescript
import { siteRecoveryNetworkMapping } from '@cdktf/provider-azurerm'

new siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping(scope: Construct, id: string, config: SiteRecoveryNetworkMappingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig">SiteRecoveryNetworkMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig">SiteRecoveryNetworkMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.putTimeouts"></a>

```typescript
public putTimeouts(value: SiteRecoveryNetworkMappingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts">SiteRecoveryNetworkMappingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isConstruct"></a>

```typescript
import { siteRecoveryNetworkMapping } from '@cdktf/provider-azurerm'

siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isTerraformElement"></a>

```typescript
import { siteRecoveryNetworkMapping } from '@cdktf/provider-azurerm'

siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isTerraformResource"></a>

```typescript
import { siteRecoveryNetworkMapping } from '@cdktf/provider-azurerm'

siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference">SiteRecoveryNetworkMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.recoveryVaultNameInput">recoveryVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.sourceNetworkIdInput">sourceNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.sourceRecoveryFabricNameInput">sourceRecoveryFabricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.targetNetworkIdInput">targetNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.targetRecoveryFabricNameInput">targetRecoveryFabricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts">SiteRecoveryNetworkMappingTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.recoveryVaultName">recoveryVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.sourceNetworkId">sourceNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.sourceRecoveryFabricName">sourceRecoveryFabricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.targetNetworkId">targetNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.targetRecoveryFabricName">targetRecoveryFabricName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.timeouts"></a>

```typescript
public readonly timeouts: SiteRecoveryNetworkMappingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference">SiteRecoveryNetworkMappingTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recoveryVaultNameInput`<sup>Optional</sup> <a name="recoveryVaultNameInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.recoveryVaultNameInput"></a>

```typescript
public readonly recoveryVaultNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `sourceNetworkIdInput`<sup>Optional</sup> <a name="sourceNetworkIdInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.sourceNetworkIdInput"></a>

```typescript
public readonly sourceNetworkIdInput: string;
```

- *Type:* string

---

##### `sourceRecoveryFabricNameInput`<sup>Optional</sup> <a name="sourceRecoveryFabricNameInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.sourceRecoveryFabricNameInput"></a>

```typescript
public readonly sourceRecoveryFabricNameInput: string;
```

- *Type:* string

---

##### `targetNetworkIdInput`<sup>Optional</sup> <a name="targetNetworkIdInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.targetNetworkIdInput"></a>

```typescript
public readonly targetNetworkIdInput: string;
```

- *Type:* string

---

##### `targetRecoveryFabricNameInput`<sup>Optional</sup> <a name="targetRecoveryFabricNameInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.targetRecoveryFabricNameInput"></a>

```typescript
public readonly targetRecoveryFabricNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SiteRecoveryNetworkMappingTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts">SiteRecoveryNetworkMappingTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.recoveryVaultName"></a>

```typescript
public readonly recoveryVaultName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sourceNetworkId`<sup>Required</sup> <a name="sourceNetworkId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.sourceNetworkId"></a>

```typescript
public readonly sourceNetworkId: string;
```

- *Type:* string

---

##### `sourceRecoveryFabricName`<sup>Required</sup> <a name="sourceRecoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.sourceRecoveryFabricName"></a>

```typescript
public readonly sourceRecoveryFabricName: string;
```

- *Type:* string

---

##### `targetNetworkId`<sup>Required</sup> <a name="targetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.targetNetworkId"></a>

```typescript
public readonly targetNetworkId: string;
```

- *Type:* string

---

##### `targetRecoveryFabricName`<sup>Required</sup> <a name="targetRecoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.targetRecoveryFabricName"></a>

```typescript
public readonly targetRecoveryFabricName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMapping.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryNetworkMappingConfig <a name="SiteRecoveryNetworkMappingConfig" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.Initializer"></a>

```typescript
import { siteRecoveryNetworkMapping } from '@cdktf/provider-azurerm'

const siteRecoveryNetworkMappingConfig: siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#name SiteRecoveryNetworkMapping#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.recoveryVaultName">recoveryVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#recovery_vault_name SiteRecoveryNetworkMapping#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#resource_group_name SiteRecoveryNetworkMapping#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.sourceNetworkId">sourceNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#source_network_id SiteRecoveryNetworkMapping#source_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.sourceRecoveryFabricName">sourceRecoveryFabricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#source_recovery_fabric_name SiteRecoveryNetworkMapping#source_recovery_fabric_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.targetNetworkId">targetNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#target_network_id SiteRecoveryNetworkMapping#target_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.targetRecoveryFabricName">targetRecoveryFabricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#target_recovery_fabric_name SiteRecoveryNetworkMapping#target_recovery_fabric_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#id SiteRecoveryNetworkMapping#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts">SiteRecoveryNetworkMappingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#name SiteRecoveryNetworkMapping#name}.

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.recoveryVaultName"></a>

```typescript
public readonly recoveryVaultName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#recovery_vault_name SiteRecoveryNetworkMapping#recovery_vault_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#resource_group_name SiteRecoveryNetworkMapping#resource_group_name}.

---

##### `sourceNetworkId`<sup>Required</sup> <a name="sourceNetworkId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.sourceNetworkId"></a>

```typescript
public readonly sourceNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#source_network_id SiteRecoveryNetworkMapping#source_network_id}.

---

##### `sourceRecoveryFabricName`<sup>Required</sup> <a name="sourceRecoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.sourceRecoveryFabricName"></a>

```typescript
public readonly sourceRecoveryFabricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#source_recovery_fabric_name SiteRecoveryNetworkMapping#source_recovery_fabric_name}.

---

##### `targetNetworkId`<sup>Required</sup> <a name="targetNetworkId" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.targetNetworkId"></a>

```typescript
public readonly targetNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#target_network_id SiteRecoveryNetworkMapping#target_network_id}.

---

##### `targetRecoveryFabricName`<sup>Required</sup> <a name="targetRecoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.targetRecoveryFabricName"></a>

```typescript
public readonly targetRecoveryFabricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#target_recovery_fabric_name SiteRecoveryNetworkMapping#target_recovery_fabric_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#id SiteRecoveryNetworkMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SiteRecoveryNetworkMappingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts">SiteRecoveryNetworkMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#timeouts SiteRecoveryNetworkMapping#timeouts}

---

### SiteRecoveryNetworkMappingTimeouts <a name="SiteRecoveryNetworkMappingTimeouts" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts.Initializer"></a>

```typescript
import { siteRecoveryNetworkMapping } from '@cdktf/provider-azurerm'

const siteRecoveryNetworkMappingTimeouts: siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#create SiteRecoveryNetworkMapping#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#delete SiteRecoveryNetworkMapping#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#read SiteRecoveryNetworkMapping#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#update SiteRecoveryNetworkMapping#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#create SiteRecoveryNetworkMapping#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#delete SiteRecoveryNetworkMapping#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#read SiteRecoveryNetworkMapping#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_network_mapping#update SiteRecoveryNetworkMapping#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryNetworkMappingTimeoutsOutputReference <a name="SiteRecoveryNetworkMappingTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.Initializer"></a>

```typescript
import { siteRecoveryNetworkMapping } from '@cdktf/provider-azurerm'

new siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts">SiteRecoveryNetworkMappingTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SiteRecoveryNetworkMappingTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryNetworkMapping.SiteRecoveryNetworkMappingTimeouts">SiteRecoveryNetworkMappingTimeouts</a> | cdktf.IResolvable

---



