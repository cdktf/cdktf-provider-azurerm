# `azurerm_kusto_iothub_data_connection`

Refer to the Terraform Registory for docs: [`azurerm_kusto_iothub_data_connection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection).

# `kustoIothubDataConnection` Submodule <a name="`kustoIothubDataConnection` Submodule" id="@cdktf/provider-azurerm.kustoIothubDataConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoIothubDataConnection <a name="KustoIothubDataConnection" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection azurerm_kusto_iothub_data_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer"></a>

```typescript
import { kustoIothubDataConnection } from '@cdktf/provider-azurerm'

new kustoIothubDataConnection.KustoIothubDataConnection(scope: Construct, id: string, config: KustoIothubDataConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig">KustoIothubDataConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig">KustoIothubDataConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetDatabaseRoutingType">resetDatabaseRoutingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetDataFormat">resetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetEventSystemProperties">resetEventSystemProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetMappingRuleName">resetMappingRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: KustoIothubDataConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>

---

##### `resetDatabaseRoutingType` <a name="resetDatabaseRoutingType" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetDatabaseRoutingType"></a>

```typescript
public resetDatabaseRoutingType(): void
```

##### `resetDataFormat` <a name="resetDataFormat" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetDataFormat"></a>

```typescript
public resetDataFormat(): void
```

##### `resetEventSystemProperties` <a name="resetEventSystemProperties" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetEventSystemProperties"></a>

```typescript
public resetEventSystemProperties(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMappingRuleName` <a name="resetMappingRuleName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetMappingRuleName"></a>

```typescript
public resetMappingRuleName(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetTableName"></a>

```typescript
public resetTableName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isConstruct"></a>

```typescript
import { kustoIothubDataConnection } from '@cdktf/provider-azurerm'

kustoIothubDataConnection.KustoIothubDataConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformElement"></a>

```typescript
import { kustoIothubDataConnection } from '@cdktf/provider-azurerm'

kustoIothubDataConnection.KustoIothubDataConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformResource"></a>

```typescript
import { kustoIothubDataConnection } from '@cdktf/provider-azurerm'

kustoIothubDataConnection.KustoIothubDataConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference">KustoIothubDataConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.consumerGroupInput">consumerGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseRoutingTypeInput">databaseRoutingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dataFormatInput">dataFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.eventSystemPropertiesInput">eventSystemPropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.iothubIdInput">iothubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.mappingRuleNameInput">mappingRuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.sharedAccessPolicyNameInput">sharedAccessPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.consumerGroup">consumerGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseRoutingType">databaseRoutingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dataFormat">dataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.eventSystemProperties">eventSystemProperties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.iothubId">iothubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.mappingRuleName">mappingRuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.timeouts"></a>

```typescript
public readonly timeouts: KustoIothubDataConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference">KustoIothubDataConnectionTimeoutsOutputReference</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `consumerGroupInput`<sup>Optional</sup> <a name="consumerGroupInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.consumerGroupInput"></a>

```typescript
public readonly consumerGroupInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `databaseRoutingTypeInput`<sup>Optional</sup> <a name="databaseRoutingTypeInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseRoutingTypeInput"></a>

```typescript
public readonly databaseRoutingTypeInput: string;
```

- *Type:* string

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dataFormatInput"></a>

```typescript
public readonly dataFormatInput: string;
```

- *Type:* string

---

##### `eventSystemPropertiesInput`<sup>Optional</sup> <a name="eventSystemPropertiesInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.eventSystemPropertiesInput"></a>

```typescript
public readonly eventSystemPropertiesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iothubIdInput`<sup>Optional</sup> <a name="iothubIdInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.iothubIdInput"></a>

```typescript
public readonly iothubIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mappingRuleNameInput`<sup>Optional</sup> <a name="mappingRuleNameInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.mappingRuleNameInput"></a>

```typescript
public readonly mappingRuleNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `sharedAccessPolicyNameInput`<sup>Optional</sup> <a name="sharedAccessPolicyNameInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.sharedAccessPolicyNameInput"></a>

```typescript
public readonly sharedAccessPolicyNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KustoIothubDataConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.consumerGroup"></a>

```typescript
public readonly consumerGroup: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `databaseRoutingType`<sup>Required</sup> <a name="databaseRoutingType" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseRoutingType"></a>

```typescript
public readonly databaseRoutingType: string;
```

- *Type:* string

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

---

##### `eventSystemProperties`<sup>Required</sup> <a name="eventSystemProperties" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.eventSystemProperties"></a>

```typescript
public readonly eventSystemProperties: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.iothubId"></a>

```typescript
public readonly iothubId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mappingRuleName`<sup>Required</sup> <a name="mappingRuleName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.mappingRuleName"></a>

```typescript
public readonly mappingRuleName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sharedAccessPolicyName`<sup>Required</sup> <a name="sharedAccessPolicyName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.sharedAccessPolicyName"></a>

```typescript
public readonly sharedAccessPolicyName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KustoIothubDataConnectionConfig <a name="KustoIothubDataConnectionConfig" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.Initializer"></a>

```typescript
import { kustoIothubDataConnection } from '@cdktf/provider-azurerm'

const kustoIothubDataConnectionConfig: kustoIothubDataConnection.KustoIothubDataConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#cluster_name KustoIothubDataConnection#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.consumerGroup">consumerGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#consumer_group KustoIothubDataConnection#consumer_group}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#database_name KustoIothubDataConnection#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.iothubId">iothubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#iothub_id KustoIothubDataConnection#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#location KustoIothubDataConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#name KustoIothubDataConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#resource_group_name KustoIothubDataConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#shared_access_policy_name KustoIothubDataConnection#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.databaseRoutingType">databaseRoutingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#database_routing_type KustoIothubDataConnection#database_routing_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.dataFormat">dataFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#data_format KustoIothubDataConnection#data_format}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.eventSystemProperties">eventSystemProperties</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#event_system_properties KustoIothubDataConnection#event_system_properties}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#id KustoIothubDataConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.mappingRuleName">mappingRuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#mapping_rule_name KustoIothubDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#table_name KustoIothubDataConnection#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#cluster_name KustoIothubDataConnection#cluster_name}.

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.consumerGroup"></a>

```typescript
public readonly consumerGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#consumer_group KustoIothubDataConnection#consumer_group}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#database_name KustoIothubDataConnection#database_name}.

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.iothubId"></a>

```typescript
public readonly iothubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#iothub_id KustoIothubDataConnection#iothub_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#location KustoIothubDataConnection#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#name KustoIothubDataConnection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#resource_group_name KustoIothubDataConnection#resource_group_name}.

---

##### `sharedAccessPolicyName`<sup>Required</sup> <a name="sharedAccessPolicyName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.sharedAccessPolicyName"></a>

```typescript
public readonly sharedAccessPolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#shared_access_policy_name KustoIothubDataConnection#shared_access_policy_name}.

---

##### `databaseRoutingType`<sup>Optional</sup> <a name="databaseRoutingType" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.databaseRoutingType"></a>

```typescript
public readonly databaseRoutingType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#database_routing_type KustoIothubDataConnection#database_routing_type}.

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#data_format KustoIothubDataConnection#data_format}.

---

##### `eventSystemProperties`<sup>Optional</sup> <a name="eventSystemProperties" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.eventSystemProperties"></a>

```typescript
public readonly eventSystemProperties: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#event_system_properties KustoIothubDataConnection#event_system_properties}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#id KustoIothubDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mappingRuleName`<sup>Optional</sup> <a name="mappingRuleName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.mappingRuleName"></a>

```typescript
public readonly mappingRuleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#mapping_rule_name KustoIothubDataConnection#mapping_rule_name}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#table_name KustoIothubDataConnection#table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KustoIothubDataConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#timeouts KustoIothubDataConnection#timeouts}

---

### KustoIothubDataConnectionTimeouts <a name="KustoIothubDataConnectionTimeouts" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.Initializer"></a>

```typescript
import { kustoIothubDataConnection } from '@cdktf/provider-azurerm'

const kustoIothubDataConnectionTimeouts: kustoIothubDataConnection.KustoIothubDataConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#create KustoIothubDataConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#delete KustoIothubDataConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#read KustoIothubDataConnection#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#create KustoIothubDataConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#delete KustoIothubDataConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_iothub_data_connection#read KustoIothubDataConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoIothubDataConnectionTimeoutsOutputReference <a name="KustoIothubDataConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { kustoIothubDataConnection } from '@cdktf/provider-azurerm'

new kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KustoIothubDataConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>

---



